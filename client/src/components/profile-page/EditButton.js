import { Link } from "react-router-dom";

export default function EditButton() {
  return (
    <Link to="/edit-profile">
      <div className="edit-button">edit</div>
    </Link>
  );
}
