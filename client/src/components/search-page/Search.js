import Navigation from "../Navigation";
import "./Search.css";
import "../profile-page/Profile.css";

export default function Search() {
  return (
    <div className="grid-layout-app">
      <div className="search-header-wrapper">
        <header className="header">
          <h1 className="cover-title">search</h1>
        </header>
      </div>
      <main className="main"></main>
      <div className="search-footer-wrapper">
        <footer className="footer">
          <Navigation />
        </footer>
      </div>
    </div>
  );
}
