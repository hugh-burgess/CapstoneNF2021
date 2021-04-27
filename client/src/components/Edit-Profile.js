import Navigation from "./Navigation";

export default function EditProfile() {
  return (
    <div className="grid-layout-app">
      <header className="header">
        <h1>
          <span className="cover-title">EditProfile</span>
        </h1>
      </header>
      <main className="main edit-page">
        <div className="edit-title">Welcome to the EditProfile!</div>
      </main>
      <footer className="footer">
        <Navigation />
      </footer>
    </div>
  );
}
