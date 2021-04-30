import { FaDog } from "react-icons/fa";
import { FaBone } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";
import { MdAddAPhoto } from "react-icons/md";
import blankProfilePic from "../../images/blankProfilePic.svg";
import bubble from "../../images/stat-bubble.svg";
import bioBubble from "../../images/bio-bubble.svg";
import "./Edit-Profile.css";

export default function EditContent() {
  return (
    <div className="profile-wrapper">
      <div className="edit-pen">
        <BsPencil />
      </div>

      <div className="edit-photo">
        <MdAddAPhoto />
      </div>

      <FaDog className="fren-icon blur-effect" />
      <FaBone className="bone-icon blur-effect" />
      <p className="fren-count blur-effect">4 frens</p>
      <p className="dog-rating blur-effect">4.8</p>
      <p className="feedback blur-effect">feedback</p>
      <div className="feedback-list blur-effect">
        <li>the goodest boy</li>
        <li>loves scritches</li>
        <li>loves walks</li>
      </div>

      <img className="profile-picture" src={blankProfilePic} alt="blank" />
      <img className="profile-bubble blur-effect" src={bubble} alt="#" />
      <img className="profile-bio" src={bioBubble} alt="#" />
      <FaBone className="big-bone-image blur-effect" />
    </div>
  );
}
