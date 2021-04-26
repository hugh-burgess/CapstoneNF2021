import Navigation from "./Navigation";
import profileDog from "../images/profile-pic.svg";
import bubble from "../images/stat-bubble.svg";
import bioBubble from "../images/bio-bubble.svg";

export default function Profile() {
  return (
    <div className="grid-layout-app">
      <header className="header">
        <h1 className="cover-title">profile</h1>
      </header>
      <main className="main profile-page">
        <div className="profile-wrapper">
          <p className="profile-bio-text">
            Hello, I’m Bud and I’m looking for a friend to hang out with, go
            running with and chase birds. I’m 20kg and love eating toys.
          </p>
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
