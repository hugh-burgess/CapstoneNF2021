import Navigation from "../Navigation";
import TourButton from "./TourButton";
import EditButton from "./EditButton";
import MainContent from "./MainContent";

export default function Profile() {
  return (
    <div className="grid-layout-app">
      <header className="header">
        <h1 className="cover-title">profile</h1>
      </header>
      <main className="main profile-page">
        <MainContent />
        <TourButton />
        <EditButton />
      </main>
      <footer className="footer">
        <Navigation />
      </footer>
    </div>
  );
}
