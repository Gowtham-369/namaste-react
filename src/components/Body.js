import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestuarants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    const {loggedInUser, setUserName} = useContext(UserContext);

    // console.log("Body rendered");
    // console.log("searchText is", searchText);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try{
            // const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4400802&lng=78.3489168");
            const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/mapi/homepage/getCards?lat=17.4400802&lng=78.3489168");
            const jsonObj = await data.json();
            // console.log(jsonObj);

            // const resInfo = jsonObj?.data?.cards[1]?.card?.card?.gridElements || jsonObj?.data?.cards[2]?.card?.card?.gridElements;
            const resInfo = jsonObj?.data?.success?.cards[3]?.gridWidget?.gridElements;
            // console.log(resInfo);
            setListOfRestaurants(resInfo?.infoWithStyle?.restaurants);
            setFilteredRestaurants(resInfo?.infoWithStyle?.restaurants);
        }
        catch(err){
            console.error("Error fetching data:", err);
        }
        
    };

    const isOnline = useOnlineStatus();
    if(!isOnline){
        return (
            <h1>
                No Internet Connection. Please try again after connecting to a network
            </h1>
        );
    }

    // Conditional Rendering
    return listOfRestuarants.length === 0 ? (
        <Shimmer />
        ) : (
        <div className="body">
            <div className="flex items-center p-2 m-2">
                <div >
                    <input type="text" className="w-50 border-2 p-2 outline outline-indigo-400" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                    />
                </div>
                <div>
                    <button className="px-2 py-1 m-2 bg-indigo-200 rounded-md" onClick={() => {
                        // console.log(searchText);
                        const matchedRestaurants = listOfRestuarants.filter((res) => (
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        ));
                        setFilteredRestaurants(matchedRestaurants);
                    }}>
                        Search
                    </button>
                </div>
                <div>
                    <button
                            className="px-2 py-1 m-2 bg-indigo-200 rounded-md"
                            onClick={() => {
                                // Filter logic
                                const topRatedRestaurants = listOfRestuarants.filter((res) => (res.info.avgRating > 4));
                                setFilteredRestaurants(topRatedRestaurants);
                            }}
                        >
                            Top Rated Restaurants
                    </button>
                </div>
                <div>
                    <label className="m-4" >UserName:</label>
                    <input type="text" className="w-50 border-2 p-2 outline outline-indigo-400" value={loggedInUser} onChange={(e) => {
                        setUserName(e.target.value);
                    }}
                    />
                </div>
            </div>
                
            <div className="flex flex-wrap">
                {filteredRestaurants.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                        {
                            /* If the restaurant is promoted, add a promoted label to it */
                            restaurant.info?.promoted ? <RestaurantCardPromoted resData={restaurant}/> : <RestaurantCard resData={restaurant} />
                        }
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
