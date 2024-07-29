import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";


it("should render RestaurantCard component with props Data", () => {
    render(
        <RestaurantCard resData={MOCK_DATA}/>
    );

    const name = screen.getByText("Fruitoholic");

    expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component with Promoted Label", () => {
    // test HOC : withPromotedLabel
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    render(
        <RestaurantCardPromoted resData={MOCK_DATA}/>
    );

    const promotedLabel = screen.getByText("Promoted");

    expect(promotedLabel).toBeInTheDocument();
});