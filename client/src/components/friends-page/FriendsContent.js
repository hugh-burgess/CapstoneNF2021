import "./FriendsContent.css";
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
      <div className="cloud-right">
        <p className="names">Ralph</p>
        <img src={cloudOne} alt="cloud" />
        <img className="dog-image-right" src={dogOne} alt="dog" />
      </div>
      <div className="cloud-left">
        <img className="dog-image-left" src={dogTwo} alt="dog" />
        <img src={cloudTwo} alt="cloud" />
        <p className="names">Spot</p>
      </div>

      <div className="cloud-right">
        <p className="names">Bob</p>

        <img src={cloudThree} alt="cloud" />
        <img className="dog-image-right" src={dogThree} alt="dog" />
      </div>

      <div className="cloud-left">
        <img className="dog-image-left" src={dogFour} alt="dog" />
        <img src={cloudFour} alt="cloud" />
        <p className="names">Jupe</p>
      </div>

      <div className="cloud-right">
        <p className="names">Steve</p>

        <img src={cloudFive} alt="cloud" />
        <img className="dog-image-right" src={dogFive} alt="dog" />
      </div>
    </div>
  );
}
