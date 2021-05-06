import { FaBone } from "react-icons/fa";
import Header from "../Header";
import Navigation from "../Navigation";
import EditContent from "./EditContent";

export default function EditProfile() {
  return (
    <div className="grid-layout-app">
      <Header title="profile" />
      <main className="main edit-page">
        <EditContent />
        <FaBone className="big-bone-image" />
      </main>
      <footer className="footer">
        <Navigation />
      </footer>
    </div>
  );
}
