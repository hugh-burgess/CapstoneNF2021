import { FaDog } from "react-icons/fa";
import { FaBone } from "react-icons/fa";
import profileDog from "../../images/profile-pic.svg";
import bubble from "../../images/stat-bubble.svg";
import bioBubble from "../../images/bio-bubble.svg";
import plant from "../../images/plant.svg";

export default function MainContent() {
  return (
    <div className="profile-wrapper">
      <p className="profile-bio-text">
        Hello, I’m Bud and I’m looking for a friend to hang out with, go running
        with and chase birds. I’m 20kg and love eating toys.
      </p>

      <FaDog className="fren-icon" />
      <FaBone className="bone-icon" />
      <h2 className="dog-name">Bud</h2>
      <p className="fren-count">4 frens</p>
      <p className="dog-rating">4.8</p>
      <p className="feedback">feedback</p>
      <div className="feedback-list">
        <li>the goodest boy</li>
        <li>loves scritches</li>
        <li>loves walks</li>
      </div>
      <img className="profile-picture" src={profileDog} alt="doggy" />
      <img className="profile-bubble" src={bubble} alt="#" />
      <img className="profile-bio" src={bioBubble} alt="#" />
      <FaBone className="big-bone-image" />
    </div>
  );
}
