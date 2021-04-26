import "./App.css";
import "./components/Navigation.css";
import { FaPaw } from "react-icons/fa";
import { FaDog } from "react-icons/fa";
import { FaMap } from "react-icons/fa";

function App() {
  return (
    <div className="grid-layout-app">
      <header className="header">
        <h1>Header</h1>
      </header>
      <main className="main">Main</main>
      <footer className="footer">
        <nav className="nav">
          <button className="nav-button">
            <FaPaw className="nav-icons" />
          </button>
          <button className="nav-button">
            <FaDog className="nav-icons" />
          </button>
          <button className="nav-button">
            <FaMap className="nav-icons" />
          </button>
        </nav>
      </footer>
    </div>
  );
}

export default App;
