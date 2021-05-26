import { GiDogHouse } from "react-icons/gi";
import { FaDog } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  return (
    <nav className="nav">
      <NavLink
        exact
        to="/profile"
        activeClassName="nav-button button-animation"
      >
        <button className="nav-button">
          <GiDogHouse className="nav-icons" />
        </button>
      </NavLink>

      <NavLink
        exact
        to="/friends"
        activeClassName="nav-button button-animation"
      >
        <button className="nav-button">
          <FaDog className="nav-icons" />
        </button>
      </NavLink>

      <NavLink exact to="/map" activeClassName="nav-button button-animation">
        <button className="nav-button">
          <FaMap className="nav-icons" />
        </button>
      </NavLink>
    </nav>
  );
}
