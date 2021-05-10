import { FaDog } from "react-icons/fa";
import { FaBone } from "react-icons/fa";
import bubble from "../../images/stat-bubble.svg";
import bioBubble from "../../images/bio-bubble.svg";
import { useEffect, useState } from "react";
import { getItemsFromLocalStorage } from "../../utils/itemStorage";

export default function MainContent() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [picture, setPicture] = useState("");

  useEffect(() => {
    const user = getItemsFromLocalStorage("user");

    setName(user[0].name);
    setBio(user[0].bio);
    setPicture(user[0].info.url);
  }, []);

  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className="profile-wrapper">
      <p className="profile-bio-text">{bio}</p>

      <FaDog className="fren-icon" />
      <FaBone className="bone-icon" />
      <h2 className="dog-name">{Capitalize(name)}</h2>
      <p className="fren-count">4 frens</p>
      <p className="dog-rating">4.8</p>
      <p className="feedback">feedback</p>
      <div className="feedback-list">
        <li>the goodest boy</li>
        <li>loves scritches</li>
        <li>loves walks</li>
      </div>
      <img className="profile-picture" src={picture} alt="doggy" />
      <img className="profile-bubble" src={bubble} alt="#" />
      <img className="profile-bio" src={bioBubble} alt="#" />
      <FaBone className="big-bone-image" />
    </div>
  );
}
