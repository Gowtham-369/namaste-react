import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = (props) => {
    // console.log(props);
    const {resData} = props;

    // console.log(resData);

    const {name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId} = resData?.info;

    const {loggedInUser} = useContext(UserContext);

    return (
        <div data-testid="resCard" className="w-[250px] h-[340px] m-2 p-2 bg-gray-150 hover:bg-gray-300 rounded-md">
            <img className="w-[250px] h-[150px] rounded-lg" alt="res-logo" src={CDN_URL + cloudinaryImageId}
            />
            <h3 className="font-bold text-lg">
                {name}
            </h3>
            <h4>
                {cuisines.join(", ")}
            </h4>
            <h4>
                {avgRating} stars
            </h4>
            <h4>
                {isNaN(costForTwo) ? costForTwo : `₹${costForTwo / 100} for TWO`}
            </h4>
            <h4>
                {deliveryTime ?? resData?.info.sla.deliveryTime} minutes
            </h4>
            <h4>
                User: {loggedInUser}
            </h4>
        </div>
    );
};

// Higher Order Component
export const withPromotedLabel = (RestaurantCard) => {
    // returns a component
    return (props) => {
        return (
            <div className="relative">
                <label className="absolute left-2 bg-black text-slate-50 rounded-sm">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};

export default RestaurantCard;