import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [loginBtnValue, setLoginBtnValue] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    // Subscribing to the store using a Selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return (
        <div className="flex justify-between h-auto bg-pink-200 shadow-md sm:bg-green-200 md:bg-indigo-200">
            <div className="w-24 h-auto">
                <img className="min-w-full min-h-full" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 font-bold">
                    <li className="p-2">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="p-2"><Link to="/">Home</Link></li>
                    <li className="p-2"><Link to="/about">About</Link></li>
                    <li className="p-2"><Link to="/notifications">Notifications</Link></li>
                    <li className="p-2"><Link to="/groceries">Grocery</Link></li>
                    <li className="p-2">
                        <Link to="/cart">
                            Cart ({cartItems.length} items)
                        </Link>
                    </li>
                    <button className="p-2 w-[70px] bg-indigo-400 rounded-md hover:cursor-pointer" onClick={() => {
                        if(loginBtnValue === "Login"){
                            setLoginBtnValue("Logout");
                        }
                        else{
                            setLoginBtnValue("Login");
                        }
                    }}>
                        {loginBtnValue}
                    </button>
                    <li className="p-2">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;