import FakeFrens from "../utils/FakeFrens";

import dogOne from "../images/dogs/dogOne.png";
import dogTwo from "../images/dogs/dogTwo.png";
import dogThree from "../images/dogs/dogThree.png";
import dogFour from "../images/dogs/dogFour.png";
import dogFive from "../images/dogs/dogFive.png";

describe("FakeFrens", () => {
  it("should return an array which contains fakeFrensArray inside", () => {
    // GIVEN that my array contains five items inside
    const fakeFrensArray = [dogOne, dogTwo, dogThree, dogFour, dogFive];
    // WHEN I call the function
    const result = FakeFrens();
    // THEN I expect to receive an array with 5 items inside
    expect(result).toEqual(fakeFrensArray);
    expect(fakeFrensArray[5]).toEqual(undefined);
    expect(fakeFrensArray[4]).toEqual("dogFive.png");
  });
});
