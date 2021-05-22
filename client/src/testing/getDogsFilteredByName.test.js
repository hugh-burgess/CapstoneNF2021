import { getDogsFilteredByName } from "../utils/getDogsFilteredByName";

describe("getDogsFilteredByName", () => {
  it("should give back an array that was filtered by comparing the object name to the filter name", () => {
    // GIVEN
    const dogs = [{ name: "Dog name" }, { name: "Name" }];
    const filter = "Dog name";

    // WHEN I call this function with these arguments
    const result = getDogsFilteredByName(dogs, filter);
    // THEN
    expect(result).toEqual([{ name: "Dog name" }]);
    expect(result).not.toEqual([{ name: "Name" }]);
  });
});
