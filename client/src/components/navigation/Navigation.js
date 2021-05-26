import { GiDogHouse } from "react-icons/gi";
import { FaDog } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { useState } from "react";

export default function Navigation() {
  const [isProfile, setIsProfile] = useState(false);
  const [isFriends, setIsFriends] = useState(false);
  const [isMap, setIsMap] = useState(false);

  function handleProfileClick() {
    setIsProfile(!isProfile);
  }
  function handleFriendsClick() {
    setIsFriends(!isFriends);
  }
  function handleMapClick() {
    setIsMap(!isMap);
  }
  console.log(`state of isProfile: ${isProfile}`);
  console.log(`state of isFriends: ${isFriends}`);
  console.log(`state of isMap: ${isMap}`);
  return (
    <nav className="nav">
      <button
        onClick={handleProfileClick}
        className={`nav-button ${
          isProfile ? "button-animation" : "null-animation"
        }`}
      >
        <NavLink exact to="/profile">
          <GiDogHouse className="nav-icons" />
        </NavLink>
      </button>
      <button
        onClick={handleFriendsClick}
        className={`nav-button ${
          isFriends ? "button-animation" : "null-animation"
        }`}
      >
        <NavLink exact to="/friends">
          <FaDog className="nav-icons" />
        </NavLink>
      </button>
      <button
        onClick={handleMapClick}
        className={`nav-button ${
          isMap ? "button-animation" : "null-animation"
        }`}
      >
        <NavLink exact to="/map">
          <FaMap className="nav-icons" />
        </NavLink>
      </button>
    </nav>
  );
}
