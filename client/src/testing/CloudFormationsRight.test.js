import CloudFormationsRight from "../utils/CloudFormationsRight";
import cloudOne from "../images/clouds/cloudOne.svg";
import cloudThree from "../images/clouds/cloudThree.svg";
import cloudFive from "../images/clouds/cloudFive.svg";

describe("CloudFormationsRight", () => {
  it("should return an array which contains three items inside", () => {
    // GIVEN that my array contains three items inside
    const cloudFormations = [cloudOne, cloudThree, cloudFive];
    // WHEN I call the function
    const result = CloudFormationsRight();
    // THEN I expect to receive an array with 3 items inside
    expect(result).toEqual(cloudFormations);
  });
});
