import CloudFormationsRight from "../utils/CloudFormationsRight";
import cloudOne from "../images/clouds/cloudOne.svg";
import cloudThree from "../images/clouds/cloudThree.svg";
import cloudFive from "../images/clouds/cloudFive.svg";

describe("CloudFormationsLeft", () => {
  it("should render an array which contains three items inside", () => {
    // GIVEN that my array contains three items inside
    const cloudFormations = [cloudOne, cloudThree, cloudFive];
    // WHEN I return the array
    const result = CloudFormationsRight();
    // THEN I expect the result to contain three items inside.
    expect(result).toEqual(cloudFormations);
  });
});
