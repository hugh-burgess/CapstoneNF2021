import { FaDog } from "react-icons/fa";
import { FaBone } from "react-icons/fa";
import bubble from "../../images/stat-bubble.svg";
import bioBubble from "../../images/bio-bubble.svg";
import { useEffect, useState } from "react";
import { getItemsFromLocalStorage } from "../../utils/itemStorage";
import TourButton from "./TourButton";
import EditButton from "./EditButton";

export default function MainContent() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [picture, setPicture] = useState("");

  useEffect(() => {
    const user = getItemsFromLocalStorage("user");
    setPicture(user[0].info.url);
    setBio(user[0].bio);
    setName(user[0].name);
  }, []);

  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className="grid-wrapper">
      <div className="top-profile-wrapper">
        <img className="profile-picture" src={picture} alt="doggy" />
        <div className="top-text-wrapper">
          <div className="top-wrapper-icons">
            <FaDog className="fren-icon" />
            <FaBone className="bone-icon" />
          </div>
          <div className="top-wrapper-text">
            <p className="fren-count">4 frens</p>
            <p className="dog-rating">4.8</p>
          </div>
        </div>
        <img className="profile-bubble" src={bubble} alt="#" />
      </div>
      <div className="middle-profile-wrapper">
        <img className="profile-bio" src={bioBubble} alt="#" />
        <div className="middle-text-wrapper">
          <h2 className="dog-name">{Capitalize(name)}</h2>
          <p className="profile-bio-text">{bio}</p>
        </div>

        <p className="feedback">feedback</p>
        <div className="feedback-list">
          <li>the goodest boy</li>
          <li>loves scritches</li>
          <li>loves walks</li>
        </div>
      </div>
      <div className="bottom-profile-wrapper">
        <FaBone className="big-bone-image" />
        <TourButton />
        <EditButton />
      </div>
    </div>
  );
}
