import Navigation from "./Navigation";

export default function Map() {
  return (
    <div className="grid-layout-app">
      <header className="header">
        <h1 className="cover-title">map</h1>
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
