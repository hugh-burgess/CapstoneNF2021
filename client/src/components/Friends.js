import Navigation from "./Navigation";

export default function Friends() {
  return (
    <div className="grid-layout-app">
      <header className="header">
        <h1>
          <span className="cover-title">frens</span>
        </h1>
      </header>
      <main className="main">
        <div>Main part of the friends</div>
      </main>
      <footer className="footer">
        <Navigation />
      </footer>
    </div>
  );
}
