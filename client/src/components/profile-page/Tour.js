import Header from "../Header";
import Navigation from "../Navigation";
import MainContent from "./MainContent";
import "./Tour.css";

export default function Tour() {
  return (
    <div className="grid-layout-app">
      <Header title="tour" />
      <main className="main tour-page">
        <MainContent />
      </main>
      <footer className="footer">
        <Navigation />
      </footer>
    </div>
  );
}
