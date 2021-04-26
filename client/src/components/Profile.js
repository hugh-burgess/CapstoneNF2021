import Navigation from "./Navigation";
import profileDog from "../images/profile-pic.svg";
import bubble from "../images/stat-bubble.svg";
import bioBubble from "../images/bio-bubble.svg";

export default function Profile() {
  return (
    <div className="grid-layout-app">
      <header className="header">
        <h1>
          <span className="cover-title">profile</span>
        </h1>
      </header>
      <main className="main profile-page">
        <div className="profile-wrapper">
          <img className="profile-picture" src={profileDog} alt="doggy" />
          <img className="profile-bubble" src={bubble} alt="#" />
          <img className="profile-bio" src={bioBubble} alt="#" />
        </div>
      </main>
      <footer className="footer">
        <Navigation />
      </footer>
    </div>
  );
}
