import { getDogsFilteredByName } from "../utils/getDogsFilteredByName";

describe("getDogsFilteredByName", () => {
  it("should take an array and filter each value inside into lowercase or return an empty string", () => {
    // GIVEN
    const dogs = [{ name: "String" }, { name: "Name" }];
    const filter = "String";

    // WHEN I call this function with these arguments
    const result = getDogsFilteredByName(dogs, filter);
    // THEN
    expect(result).toEqual([{ name: "String" }]);
  });
});
