import { Link } from "react-router-dom";

export default function EditButton() {
  return (
    <Link to="/edit-profile">
      <button className="generic-button">edit</button>
    </Link>
  );
}
