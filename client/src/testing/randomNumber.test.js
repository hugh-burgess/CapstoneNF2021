import randomNumber from "../utils/RandomNumber";

describe("randomNumber", () => {
  it("should recieve a number and returns the largest integer of that given number, and also a number less than the max number given", () => {
    // GIVEN
    const max = 5;
    // WHEN I call this function with the arguement "max"
    const value = randomNumber(max);
    // THEN the value should be equal to or less than the max
    expect(value <= max).toEqual(true);
  });
  it("should recieve a number and returns the largest integer of that given number, and also a number greater than zero", () => {
    // GIVEN
    const max = 5;
    // WHEN I call this function with the arguement "max"
    const value = randomNumber(max);
    // THEN the value should be equal to or greater than zero
    expect(value >= 0).toEqual(true);
  });
  it("should recieve a number and returns the largest integer of that given number, and also be a Number", () => {
    // GIVEN
    const max = 5;
    // WHEN I call this function with the arguement "max"
    const value = randomNumber(max);
    // THEN the value should be a number

    expect(typeof value).toEqual("number");
  });
});
