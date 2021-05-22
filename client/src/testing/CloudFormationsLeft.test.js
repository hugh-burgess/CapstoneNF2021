import CloudFormationsLeft from "../utils/CloudFormationsLeft";
import cloudTwo from "../images/clouds/cloudTwo.svg";
import cloudFour from "../images/clouds/cloudFour.svg";
import cloudSix from "../images/clouds/cloudSix.svg";

describe("CloudFormationsLeft", () => {
  it("should return an array which contains three items inside", () => {
    // GIVEN that my array contains three items inside
    const cloudFormations = [cloudTwo, cloudFour, cloudSix];
    // WHEN I call the function
    const result = CloudFormationsLeft();
    // THEN I expect to receive an array with 3 items inside
    expect(result).toEqual(cloudFormations);
  });
});
