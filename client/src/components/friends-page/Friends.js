import Navigation from "../Navigation";
import FriendsContent from "./FriendsContent";

export default function Friends() {
  return (
    <div className="grid-layout-app">
      <div className="friends-header-wrapper">
        <header className="header friends-header">
          <h1 className="cover-title">frens</h1>
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
