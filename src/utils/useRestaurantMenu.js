import { MENU_URL } from "./constants";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    // console.log("Start of Restaurant Menu Hook");

    useEffect(() => {
        // console.log("Inside UseEffect of Restaurant Menu Hook");
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL+resId); //808887, 137034
        const jsonObj = await data.json();
        setResInfo(jsonObj.data);
    }
    // console.log("End of Restaurant Menu Hook");
    return resInfo;
}

export default useRestaurantMenu;