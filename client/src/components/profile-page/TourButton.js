import { GiBinoculars } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function TourButton() {
  return (
    <div className="tour-wrapper">
      <Link to="/tour">
        <GiBinoculars className="tour-icon" />
      </Link>
    </div>
  );
}
