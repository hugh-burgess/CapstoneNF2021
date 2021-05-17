import { FaDog } from "react-icons/fa";
import { FaBone } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";
import { MdAddAPhoto } from "react-icons/md";
import bubble from "../../images/stat-bubble.svg";
import bioBubble from "../../images/bio-bubble.svg";
import "./Edit-Profile.css";
import { Link } from "react-router-dom";

export default function EditContent() {
  return (
    <div className="grid-wrapper">
      <div className="top-profile-wrapper">
        <div className="blank-picture" />
        <MdAddAPhoto className="edit-photo" />
        <div className="top-text-wrapper ">
          <div className="top-wrapper-icons">
            <FaDog className="fren-icon blur-effect" />
            <FaBone className="bone-icon blur-effect" />
          </div>
          <div className="top-wrapper-text blur-effect">
            <p className="fren-count">4 frens</p>
            <p className="dog-rating">4.8</p>
          </div>
        </div>
        <img className="profile-bubble blur-effect" src={bubble} alt="#" />
      </div>
      <div className="middle-profile-wrapper">
        <img className="profile-bio" src={bioBubble} alt="#" />
        <BsPencil className="edit-pen" />
        <div className="feedback-list-wrapper blur-effect">
          <p className="feedback">feedback</p>
          <div className="feedback-list">
            <li>the goodest boy</li>
            <li>loves scritches</li>
            <li>loves walks</li>
          </div>
        </div>
      </div>
      <div className="bottom-profile-wrapper">
        <Link to="/profile">
          <div className="save-button">save</div>
        </Link>
      </div>
    </div>
  );
}
