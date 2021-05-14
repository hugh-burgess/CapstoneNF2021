import Navigation from "../navigation/Navigation";
import MainContent from "./MainContent";
import "./Profile.css";
import Header from "../Header";

export default function Profile() {
  return (
    <div className="grid-layout-app">
      <Header title="profile" />
      <main className="main profile-page">
        <MainContent />
      </main>
      <footer className="footer">
        <Navigation />
      </footer>
    </div>
  );
}
