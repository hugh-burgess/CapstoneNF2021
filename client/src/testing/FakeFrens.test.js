import FakeFrens from "../utils/FakeFrens";

import dogOne from "../images/dogs/dogOne.png";
import dogTwo from "../images/dogs/dogTwo.png";
import dogThree from "../images/dogs/dogThree.png";
import dogFour from "../images/dogs/dogFour.png";
import dogFive from "../images/dogs/dogFive.png";

describe("FakeFrens", () => {
  it("should render an array which contains fakeFrensArray inside", () => {
    // GIVEN that my array contains five items inside
    const fakeFrensArray = [dogOne, dogTwo, dogThree, dogFour, dogFive];
    // WHEN I return the array
    const result = FakeFrens();
    // THEN I expect the result to contain three items inside.
    expect(result).toEqual(fakeFrensArray);
  });
});
