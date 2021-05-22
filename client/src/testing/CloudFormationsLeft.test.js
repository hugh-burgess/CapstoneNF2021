import CloudFormationsLeft from "../utils/CloudFormationsLeft";
import cloudTwo from "../images/clouds/cloudTwo.svg";
import cloudFour from "../images/clouds/cloudFour.svg";
import cloudSix from "../images/clouds/cloudSix.svg";

describe("CloudFormationsLeft", () => {
  it("should render an array which contains three items inside", () => {
    // GIVEN that my array contains three items inside
    const cloudFormations = [cloudTwo, cloudFour, cloudSix];
    // WHEN I return the array
    const result = CloudFormationsLeft();
    // THEN I expect the result to contain three items inside.
    expect(result).toEqual(cloudFormations);
  });
});
