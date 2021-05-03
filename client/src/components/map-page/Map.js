import Navigation from "../Navigation";
import ReactMapGL from "react-map-gl";
import { useState } from "react";

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 53.5511,
    longitude: 9.9937,
    height: "100vh",
    width: "100vw",
    zoom: 11,
  });

  return (
    <div className="grid-layout-app">
      <header className="header">
        <h1 className="cover-title">map</h1>
      </header>
      <main className="main">
        <div>
          <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={
              "pk.eyJ1IjoidHJpeDI3MDUiLCJhIjoiY2tvOGV4NnF5Mm1lZDJwcGd2cThxcWZhbCJ9.5YJMb_ZfjMrG0yCbYyFj5w"
            }
          >
            markers here
          </ReactMapGL>
        </div>
      </main>
      <footer className="footer">
        <Navigation />
      </footer>
    </div>
  );
}
