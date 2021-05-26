import MainContent from "./MainContent";
import "./Profile.css";
import Header from "../header/Header";

export default function Profile() {
  return (
    <div className="grid-layout-app">
      <Header title="profile" />
      <main className="main profile-page">
        <MainContent />
      </main>
    </div>
  );
}
