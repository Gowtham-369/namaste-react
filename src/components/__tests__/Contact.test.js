import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";


describe("Contact Us Page Test Cases", () => {
    beforeAll(() => {
        // console.log("Before All Test Cases");
    });

    beforeEach(() => {
        // console.log('Before Each Test Case');
    });

    afterAll(() => {
        // console.log("After All Test Cases");
    });

    afterEach(() => {
        // console.log('After Each Test Case');
    });

    it("Should load heading in Contact Us Component", () => {
        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        // Assertion
        expect(heading).toBeInTheDocument();
    });
    
    it("Should load button in Contact Us Component", () => {
        render(<Contact />);
    
        const button = screen.getByText("Submit");
        // console.log(button);
        // Assertion
        expect(button).toBeInTheDocument();
    });
    
    it("Should load input textboxex with placeholder 'name' in Contact Us Component", () => {
        render(<Contact />);
    
        const inputBox = screen.getByPlaceholderText("name");
    
        // Assertion
        expect(inputBox).toBeInTheDocument();
    });
    
    it("Should load two input textboxes in Contact Us Component", () => {
        render(<Contact />);
    
        const inputBoxes = screen.getAllByRole("textbox");
        // console.log(inputBoxes[0]);
    
        // Assertion
        expect(inputBoxes.length).toBe(2);
    });
});



