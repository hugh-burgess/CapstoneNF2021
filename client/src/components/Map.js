import Navigation from "./Navigation";

export default function Map() {
  return (
    <div>
      <header className="header">
        <h1>
          <span className="cover-title">map</span>
        </h1>
      </header>
      <main className="main">
        <div>Main part of the map</div>
      </main>
      <footer className="footer">
        <Navigation />
      </footer>
    </div>
  );
}
