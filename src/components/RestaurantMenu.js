import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    // console.log("Start of Restauarant Menu");
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);
    // console.log("After Restarurant Menu hook");

    const [showIndex, setShowIndex] = useState(0);


    if(resInfo === null){
        return <Shimmer />;
    }

    // console.log(resInfo);
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    // const recommendedItemCards = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards;

    const menuData = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const itemCategories = menuData.filter((c) => {return c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"});
    // console.log(itemCategories);

    return (
        <div className="text-center">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            {/* <ul>
                {recommendedItemCards.map((itemCard) => {
                    return <li key={itemCard.card.info.id}>{itemCard.card.info.name} - Rs.{itemCard.card.info.price/100}</li>
                })}
            </ul> */}
            <ul>
                {
                    itemCategories.map((category, index) => {
                        return <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} showContents={index===showIndex?true:false} setShowIndex={()=>{setShowIndex(index);}}/>
                    })
                }
            </ul>
        </div>
    );
}

export default RestaurantMenu;