import Navigation from "../Navigation";
import MainContent from "./MainContent";

export default function EditProfile() {
  return (
    <div className="grid-layout-app">
      <header className="header">
        <h1 className="cover-title">EditProfile</h1>
      </header>
      <main className="main edit-page">
        <MainContent />
      </main>
      <footer className="footer">
        <Navigation />
      </footer>
    </div>
  );
}
