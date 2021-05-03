import Navigation from "../Navigation";
import ReactMapGL, { Marker } from "react-map-gl";
import * as parkData from "../../parks.json";
import { useState } from "react";

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 53.55293568997971,
    longitude: 10.007432910156012,
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
            onViewportChange={(viewport) => {
              setViewport(viewport);
            }}
            mapStyle="mapbox://styles/trix2705/cko8hkfyn0sm617o9ek7qmkiq"
          >
            {parkData.park.map((park) => {
              <Marker></Marker>;
            })}
          </ReactMapGL>
        </div>
      </main>
      <footer className="footer">
        <Navigation />
      </footer>
    </div>
  );
}
