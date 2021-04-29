import { Link } from "react-router-dom";
import Navigation from "../Navigation";
import EditContent from "./EditContent";

export default function EditProfile() {
  return (
    <div className="grid-layout-app">
      <header className="header">
        <h1 className="cover-title">profile</h1>
      </header>
      <main className="main edit-page">
        <EditContent />

        <Link to="/profile">
          <div className="save-button">save</div>
        </Link>
      </main>
      <footer className="footer">
        <Navigation />
      </footer>
    </div>
  );
}
