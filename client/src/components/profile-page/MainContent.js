import { FaDog } from "react-icons/fa";
import { FaBone } from "react-icons/fa";
import TourButton from "./TourButton";
import EditButton from "./EditButton";
import profileDog from "../../images/profile-pic.svg";
import bubble from "../../images/stat-bubble.svg";
import bioBubble from "../../images/bio-bubble.svg";

export default function MainContent() {
  return (
    <div className="profile-wrapper">
      <div className="grid-wrapper">
        <img className="profile-picture" src={profileDog} alt="doggy" />
        <img className="profile-bubble" src={bubble} alt="#" />
        <div className="top-icons-and-text">
          <div className="top-flex-frens">
            <FaDog className="fren-icon" />
            <p className="fren-count">4 frens</p>
          </div>
          <div className="top-flex-rating">
            <FaBone className="bone-icon" />
            <p className="dog-rating">4.8</p>
          </div>
        </div>
        <div className="middle-name-wrapper">
          <h2 className="dog-name">Bud</h2>
        </div>
        <div className="middle-bio-wrapper">
          <p className="profile-bio-text">
            Hello, I’m Bud and I’m looking for a friend to hang out with, go
            running with and chase birds. I’m 20kg and love eating toys.
          </p>
        </div>
        <img className="profile-bio" src={bioBubble} alt="#" />
        <div className="middle-flex-feedback-title">
          <p className="feedback">feedback</p>
        </div>
        <div className="middle-flex-feedback-list">
          <div className="feedback-list">
            <li>the goodest boy</li>
            <li>loves scritches</li>
            <li>loves walks</li>
          </div>
        </div>
        <div className="tour-wrapper">
          <TourButton />
        </div>
        <div className="edit-wrapper">
          <EditButton />
        </div>
        <div className="bone-wrapper">
          <FaBone className="big-bone-image" />
        </div>
      </div>
    </div>
  );
}
