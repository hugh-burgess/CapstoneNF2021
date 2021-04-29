import Navigation from "../Navigation";
import MainContent from "./MainContent";
import "./Tour.css";

export default function Tour() {
  return (
    <div>
      <header className="header">
        <h1 className="cover-title">tour</h1>
      </header>
      <main className="main tour-page">
        <MainContent />
      </main>
      <footer className="footer">
        <Navigation />
      </footer>
    </div>
  );
}
