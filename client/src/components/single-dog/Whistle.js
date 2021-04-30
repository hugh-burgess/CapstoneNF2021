import Navigation from "../Navigation";
import "./SingleDog.css";

export default function Whistle() {
  return (
    <div className="whistle-page">
      <header className="header">
        <h1 className="cover-title">Whistle</h1>
      </header>
      <main className="main">
        <div>Main part of the whistle page</div>
      </main>
      <footer className="footer">
        <Navigation />
      </footer>
    </div>
  );
}
