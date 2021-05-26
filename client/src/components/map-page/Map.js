import Header from "../header/Header";
import "./SinglePark.css";
import MapDisplay from "./MapDisplay";

export default function Map() {
  return (
    <div className="grid-layout-app">
      <Header title="map" />

      <main className="main">
        <div>
          <MapDisplay />
        </div>
      </main>
    </div>
  );
}
