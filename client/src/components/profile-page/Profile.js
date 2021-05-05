import Navigation from "../Navigation";
import TourButton from "./TourButton";
import EditButton from "./EditButton";
import MainContent from "./MainContent";
import "./Profile.css";
import Header from "../Header";

export default function Profile() {
  return (
    <div className="grid-layout-app">
      <Header title="profile" />
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
