import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navigation from "../Navigation";
import FriendsContent from "./FriendsContent";

export default function Friends() {
  return (
    <div className="grid-layout-app">
      <div className="friends-header-wrapper">
        <header className="header friends-header">
          <h1 className="cover-title">frens</h1>

          <Link to="/search">
            <FaSearch className="search-icon" />
          </Link>
        </header>
      </div>
      <main className="main friends-page">
        <FriendsContent />
      </main>
      <div className="friends-footer-wrapper">
        <footer className="footer friends-footer">
          <Navigation />
        </footer>
      </div>
    </div>
  );
}
