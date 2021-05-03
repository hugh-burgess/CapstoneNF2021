import * as parkData from "../../parks.json";
import Navigation from "../Navigation";
import "./SinglePark.css";

export default function SinglePark() {
  return (
    <div className="grid-layout-app">
      <header className="header">
        <h1 className="single-map-title">Single Map</h1>
      </header>
      <main className="main"></main>
      <footer className="footer">
        <Navigation />
      </footer>
    </div>
  );
}
