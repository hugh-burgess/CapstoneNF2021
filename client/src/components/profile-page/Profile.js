import Navigation from "../Navigation";

import MainContent from "./MainContent";
import "./Profile.css";
import Header from "../Header";
import { FaBone } from "react-icons/fa";

export default function Profile() {
  return (
    <div className="grid-layout-app">
      <Header title="profile" />
      <main className="main profile-page">
        <MainContent />
        <FaBone className="big-bone-image" />
      </main>
      <footer className="footer">
        <Navigation />
      </footer>
    </div>
  );
}
