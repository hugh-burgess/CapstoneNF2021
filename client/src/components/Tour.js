import Navigation from "./Navigation";

export default function Map() {
  return (
    <div className="grid-layout-app">
      <header className="header">
        <h1>
          <span className="cover-title">tour</span>
        </h1>
      </header>
      <main className="main">
        <div className="tour-title">Welcome to the tour!</div>
      </main>
      <footer className="footer">
        <Navigation />
      </footer>
    </div>
  );
}
