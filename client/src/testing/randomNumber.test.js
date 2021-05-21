// export default function randomNumber(max) {
//     return Math.floor(Math.random() * max);
//   }

import randomNumber from "../utils/RandomNumber";

describe("randomNumber", () => {
  it("should recieve a number and returns the largest integer of that given number, and also a number in the range of the max number given", () => {
    // GIVEN
    const max = 5;
    // WHEN I call this function with the arguement "max"
    const value = randomNumber(max);
    // THEN
    expect(value <= max).toEqual(true);
    expect(value >= 0).toEqual(true);
    expect(typeof value).toEqual("number");
  });
});
