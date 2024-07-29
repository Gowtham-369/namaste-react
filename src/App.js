import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Notifications from "./components/Notifications";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";
import Cart from "./components/Cart";
import Contact from "./components/Contact";

const About = lazy(() => import("./components/About"));
const Grocery = lazy(() => import("./components/Grocery"));


// Lazy Loading
// Dynamic Bundling
// Chunking
// Dynamic Loading
// On-Demand Loading
// Code Splitting

const AppLayout = () => {

    //authentication
    const [userName, setUserName] = useState();
    useEffect(() => {
        // make API call and get user info
        const data = {
            name: "Gowtham Uppunuri"
        };
        setUserName(data.name);
    },[]);
    return (
        <Provider store={AppStore}>
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
        </Provider>
       
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading About...</h1>}><About /></Suspense>
            },
            {
                path: "/contactus",
                element: <Contact />
            },
            {
                path: "/notifications",
                element: <Notifications />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/groceries",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);