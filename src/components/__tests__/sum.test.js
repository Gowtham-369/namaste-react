import { sum } from "../sum";

test("Adds two numbers 2 and 3 to equal to 5", () => {
    const result = sum(2, 3);
    expect(result).toBe(5);
});