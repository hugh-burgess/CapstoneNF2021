import { Link } from "react-router-dom";

export default function EditButton() {
  return (
    <div className="edit-wrapper">
      <Link to="/edit-profile">
        <div className="edit-button">edit</div>
      </Link>
    </div>
  );
}
