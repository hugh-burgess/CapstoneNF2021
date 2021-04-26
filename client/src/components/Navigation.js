import { FaPaw } from "react-icons/fa";
import { FaDog } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="nav">
      <button className="nav-button">
        <NavLink exact to="/profile">
          <FaPaw className="nav-icons" />
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
