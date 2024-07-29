import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA_NAME from "../mocks/resMenuMock.json";
import { Provider } from "react-redux";
import AppStore from "../../utils/AppStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA_NAME)
    })
);
it("should load Restaurant Menu Component", async () => {
    await act( async () => 
        render(
            <BrowserRouter>
                <Provider store={AppStore}>
                    <Header />
                    <RestaurantMenu />
                    <Cart />
                </Provider>
            </BrowserRouter>
        )
    )

    const accordianHeader = screen.getByText("Drinks (9)");
    fireEvent.click(accordianHeader);


    expect(screen.getAllByTestId("foodItems").length).toBe(9);

    const addBtns = screen.getAllByRole("button", {name: "Add +"});

    expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();
    // console.log(addBtns.length);
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

    fireEvent.click(addBtns[1]);

    expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();
    
    expect(screen.getAllByTestId("foodItems").length).toBe(11);

    fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));

    expect(screen.getAllByTestId("foodItems").length).toBe(9);

    expect(screen.getByText("Cart is empty. Please Add Items")).toBeInTheDocument();
});