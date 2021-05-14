import { GiDogHouse } from "react-icons/gi";
import { FaDog } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  return (
    <nav className="nav">
      <button className="nav-button">
        <NavLink exact to="/profile">
          <GiDogHouse className="nav-icons" />
        </NavLink>
      </button>
      <button className="nav-button">
        <NavLink exact to="/friends">
          <FaDog className="nav-icons" />
        </NavLink>
      </button>
      <button className="nav-button">
        <NavLink exact to="/map">
          <FaMap className="nav-icons" />
        </NavLink>
      </button>
    </nav>
  );
}
