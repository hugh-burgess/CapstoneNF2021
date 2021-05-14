import Header from "../Header";
import Navigation from "../navigation/Navigation";
import EditContent from "./EditContent";

export default function EditProfile() {
  return (
    <div className="grid-layout-app">
      <Header title="edit profile" />
      <main className="main edit-page">
        <EditContent />
      </main>
      <footer className="footer">
        <Navigation />
      </footer>
    </div>
  );
}
