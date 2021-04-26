import Navigation from "./Navigation";

export default function Profile() {
  return (
    <div>
      <header className="header">
        <h1>
          <span className="cover-title">Profile</span>
        </h1>
      </header>
      <main className="main">
        <div>Main part of the profile</div>
      </main>
      <footer className="footer">
        <Navigation />
      </footer>
    </div>
  );
}
