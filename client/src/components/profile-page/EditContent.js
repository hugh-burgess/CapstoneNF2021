import { FaDog } from "react-icons/fa";
import { FaBone } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";
import blankProfilePic from "../../images/blankProfilePic.svg";
import bubble from "../../images/stat-bubble.svg";
import bioBubble from "../../images/bio-bubble.svg";
import plant from "../../images/plant.svg";

export default function EditContent() {
  return (
    <div className="profile-wrapper">
      <div className="edit-pen">
        <BsPencil />
      </div>

      <FaDog className="fren-icon blur-effect" />
      <FaBone className="bone-icon blur-effect" />
      <h2 className="dog-name">Bud</h2>
      <p className="fren-count blur-effect">4 frens</p>
      <p className="dog-rating blur-effect">4.8</p>
      <img className="profile-picture" src={blankProfilePic} alt="blank" />
      <img className="profile-bubble blur-effect" src={bubble} alt="#" />
      <img className="profile-bio" src={bioBubble} alt="#" />
      <img className="plant-image blur-effect" src={plant} alt="plant" />
    </div>
  );
}
