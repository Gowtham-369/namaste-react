import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/resListDataMock.json";
import { BrowserRouter } from "react-router-dom";
// import { act } from "react";
// import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    });
});

it("should Search Restaurant List for chinese text input", async () => {
    await act(async () => 
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );
    
    const resCardsBeforeClick = screen.getAllByTestId("resCard");

    expect(resCardsBeforeClick.length).toBe(9);

    const searchBtn = screen.getByRole("button", {name: "Search"});
    // console.log(searchBtn);
    const searchInput = screen.getByTestId("searchInput");
    // console.log(searchInput);
    fireEvent.change(searchInput, {target: {value: "chinese"}});
    
    fireEvent.click(searchBtn);

    const resCardsAfterClick = screen.getAllByTestId("resCard");
    
    expect(resCardsAfterClick.length).toBe(1);

});

it("should filter top rated restaurants upon clicking Top Restaurants Filter Button", async () => {
    await act(async () => 
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );
    
    const resCardsBeforeClick = screen.getAllByTestId("resCard");

    expect(resCardsBeforeClick.length).toBe(9);

    const topRatedRestaurantsBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});
    // console.log(topRatedRestaurantsBtn);

    fireEvent.click(topRatedRestaurantsBtn);

    const resCardsAfterClick = screen.getAllByTestId("resCard");
    
    expect(resCardsAfterClick.length).toBe(6);

});