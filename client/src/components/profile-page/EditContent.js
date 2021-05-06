import { FaDog } from "react-icons/fa";
import { FaBone } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";
import { MdAddAPhoto } from "react-icons/md";
import blankProfilePic from "../../images/blankProfilePic.svg";
import bubble from "../../images/stat-bubble.svg";
import bioBubble from "../../images/bio-bubble.svg";
import "./Edit-Profile.css";
import { Link } from "react-router-dom";

export default function EditContent() {
  return (
    <div className="profile-wrapper">
      <div className="edit-pen">
        <BsPencil />
      </div>

      <div className="edit-photo">
        <MdAddAPhoto />
      </div>
      <div className="grid-wrapper">
        <img className="profile-picture" src={blankProfilePic} alt="doggy" />
        <img className="profile-bubble blur-effect" src={bubble} alt="#" />
        <div className="top-icons-and-text">
          <div className="top-flex-frens blur-effect">
            <FaDog className="fren-icon" />
            <p className="fren-count">4 frens</p>
          </div>
          <div className="top-flex-rating blur-effect">
            <FaBone className="bone-icon" />
            <p className="dog-rating">4.8</p>
          </div>
        </div>

        <img className="profile-bio" src={bioBubble} alt="#" />
        <div className="middle-flex-feedback-wrapper blur-effect">
          <p className="feedback">feedback</p>
          <div className="feedback-list">
            <li>the goodest boy</li>
            <li>loves scritches</li>
            <li>loves walks</li>
          </div>
        </div>

        <div className="edit-wrapper">
          <Link to="/profile">
            <div className="save-button">save</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
