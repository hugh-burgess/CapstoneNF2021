import cloudOne from "../../images/cloudOne.svg";
import cloudTwo from "../../images/cloudTwo.svg";
import cloudThree from "../../images/cloudThree.svg";
import cloudFour from "../../images/cloudFour.svg";
import cloudFive from "../../images/cloudFive.svg";
import dogOne from "../../images/dogs/dogOne.png";
import dogTwo from "../../images/dogs/dogTwo.png";
import dogThree from "../../images/dogs/dogThree.png";
import dogFour from "../../images/dogs/dogFour.png";
import dogFive from "../../images/dogs/dogFive.png";

export default function FriendsContent() {
  return (
    <div className="clouds-wrapper">
      <img className="cloud-right" src={cloudOne} alt="cloud" />
      <img className="dog-image cloud-right" src={dogOne} alt="dog" />
      <img className="cloud-left" src={cloudTwo} alt="cloud" />
      <img className="dog-image cloud-left" src={dogTwo} alt="dog" />
      <img className="cloud-right" src={cloudThree} alt="cloud" />
      <img className="dog-image cloud-right" src={dogThree} alt="dog" />
      <img className="cloud-left" src={cloudFour} alt="cloud" />
      <img className="dog-image cloud-left" src={dogFour} alt="dog" />
      <img className="cloud-right" src={cloudFive} alt="cloud" />
      <img className="dog-image cloud-right" src={dogFive} alt="dog" />
    </div>
  );
}
