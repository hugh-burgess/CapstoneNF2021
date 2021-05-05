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
      <div className="top-flex-wrapper">
        <img className="profile-picture" src={blankProfilePic} alt="doggy" />
        <img className="profile-bubble blur-effect" src={bubble} alt="#" />
        <div className="top-icons-and-text blur-effect">
          <div className="top-flex-frens">
            <FaDog className="fren-icon" />
            <p className="fren-count">4 frens</p>
          </div>
          <div className="top-flex-rating">
            <FaBone className="bone-icon" />
            <p className="dog-rating">4.8</p>
          </div>
        </div>
      </div>
      <div className="middle-flex-text blur-effect">
        <h2 className="dog-name">Bud</h2>
        <p className="profile-bio-text">
          Hello, I’m Bud and I’m looking for a friend to hang out with, go
          running with and chase birds. I’m 20kg and love eating toys.
        </p>
      </div>
      <div className="middle-flex-wrapper">
        <img className="profile-bio" src={bioBubble} alt="#" />
        <div className="middle-flex-feedback-wrapper ">
          <p className="feedback blur-effect">feedback</p>
          <div className="feedback-list blur-effect">
            <li>the goodest boy</li>
            <li>loves scritches</li>
            <li>loves walks</li>
          </div>
          <Link to="/profile">
            <div className="save-button">save</div>
          </Link>
        </div>
      </div>

      <div className="bottom-flex-wrapper"></div>
    </div>
  );
}
