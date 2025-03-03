import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import AppStore from "../../utils/AppStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("Should render Header Component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={AppStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});
    // const loginButton = screen.getByText("Login");
    // console.log(loginButton);
    
    expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with Cart having 0 items", () => {
    render(
        <BrowserRouter>
            <Provider store={AppStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart (0 items)");
    // const cartItems = screen.getByText(/Cart/);
    
    expect(cartItems).toBeInTheDocument();
});

it("Should render Header Component with a Cart item", () => {
    render(
        <BrowserRouter>
            <Provider store={AppStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
;
    const cartItem = screen.getByText(/Cart/);
    
    expect(cartItem).toBeInTheDocument();
});

it("Should change Login Button to Logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={AppStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", {name: "Logout"});
    
    expect(logoutButton).toBeInTheDocument();
});