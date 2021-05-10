import { GiBinoculars } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function TourButton() {
  return (
    <Link to="/tour">
      <GiBinoculars className="tour-icon" />
    </Link>
  );
}
