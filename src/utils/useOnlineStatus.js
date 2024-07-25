import { useState, useEffect } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);
    useEffect(() => {
        window.addEventListener("offline", (event) => {
            // console.log("No Internet Connection. Please try again after connecting to a network");
            setOnlineStatus(false);
        });
        window.addEventListener("online", (event) => {
            // console.log("No Internet Connection. Please try again after connecting to a network");
            setOnlineStatus(true);
        });
    }, []);
    return onlineStatus; // boolean value
}

export default useOnlineStatus;