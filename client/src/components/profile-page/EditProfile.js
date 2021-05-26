import Header from "../header/Header";
import EditContent from "./EditContent";

export default function EditProfile() {
  return (
    <div className="grid-layout-app">
      <Header title="edit profile" />
      <main className="main edit-page">
        <EditContent />
      </main>
    </div>
  );
}
