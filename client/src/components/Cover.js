import { FaPaw } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Cover() {
  return (
    <Link to="/profile">
      <div className="cover-page">
        <div className="cover-box-light-blue">
          <h1 className="cover-title">Walkies&amp;Talkies</h1>
        </div>
        <FaPaw className="cover-paw" />
      </div>
    </Link>
  );
}
