import { useState, useEffect } from "react";

const User = ({name, location}) => {
    const [count,setCount] = useState(0);

    useEffect(() => {
        console.log("useEffect");
        const timer = setInterval(() => {
            console.log("NAMASTE REACT OP");
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log("UseEffect Return");
        }
    },[]);


    console.log("Render");
    return (
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @GowthamRU1408</h4>
        </div>
    );
};

export default User;