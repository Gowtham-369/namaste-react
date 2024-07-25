import ItemList from "./ItemList";
import {useState} from "react";
const RestaurantCategory = ({data, showContents, setShowIndex}) => {
    // console.log(data);
    const handleClick = () => {
        console.log("Clicked");
        setShowIndex();
    };
    return (
        <div className="bg-indigo-200 shadow-lg p-4 mx-auto my-4 w-8/12 ">
            {/* Accordian Header */}
            <div className= "flex justify-between items-center cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">
                    {data.title} ({data.itemCards.length})
                </span>
                <span>{showContents ? "⬆️" : "⬇️"}</span>
            </div>
            {/* Accordian Body */}
            <div>
                {showContents && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    );
}

export default RestaurantCategory;