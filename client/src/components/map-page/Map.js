import Navigation from "../Navigation";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as parkData from "../../parks.json";
import { useState } from "react";
import { TiTree } from "react-icons/ti";
import { AiFillStar } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 53.55293568997971,
    longitude: 10.007432910156012,
    height: "100vh",
    width: "100vw",
    zoom: 11,
  });
  const [selectedPark, setSelectedPark] = useState(null);
  // const [starPark, setStarPark] = useState(false);
  let { mapID } = useParams();
  mapID = selectedPark?.coordinates[0].replace(/\./g, "-");
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
            {parkData.park.map((park) => (
              <Marker
                key={park.coordinates[0]}
                latitude={Number(park.coordinates[0])}
                longitude={Number(park.coordinates[1])}
              >
                <TiTree
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedPark(park);
                  }}
                />
              </Marker>
            ))}

            {selectedPark ? (
              <Link to={`/single-park/${mapID}`}>
                <Popup
                  latitude={Number(selectedPark.coordinates[0])}
                  longitude={Number(selectedPark.coordinates[1])}
                  // onClose={() => {
                  //   setSelectedPark(null);
                  // }}
                >
                  <AiFillStar
                  // onClick={() => {
                  //   setStarPark(!starPark);
                  // }}
                  />
                  <div>
                    <h3>{selectedPark.name}</h3>
                    <p>{selectedPark.address}</p>
                  </div>
                </Popup>
              </Link>
            ) : null}
          </ReactMapGL>
        </div>
      </main>
      <footer className="footer">
        <Navigation />
      </footer>
    </div>
  );
}
