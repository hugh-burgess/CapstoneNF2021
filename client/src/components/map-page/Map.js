import Navigation from "../navigation/Navigation";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import parksData from "../../parks.json";
import { useEffect, useState } from "react";
import { TiTree } from "react-icons/ti";
import { AiFillStar } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import "./SinglePark.css";
import {
  getItemsFromLocalStorage,
  saveJSONToLocalStorage,
} from "../../utils/itemStorage";
import Header from "../Header";

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 53.55293568997971,
    longitude: 10.007432910156012,
    height: "100vh",
    width: "100vw",
    zoom: 11,
  });
  const [selectedPark, setSelectedPark] = useState(null);
  const [parkData, setParkData] = useState(initialLoad());
  let { mapID } = useParams();
  mapID = selectedPark?.coordinates[0].replace(/\./g, "-");

  function handleStarClick(name) {
    const [searchedPark] = parkData.filter((park) => park.name === name);
    const index = parkData.findIndex((park) => {
      return park.name === name;
    });
    searchedPark.isStarred = !searchedPark.isStarred;
    const veryNewParks = [
      ...parkData.slice(0, index),
      searchedPark,
      ...parkData.slice(index + 1),
    ];
    setParkData(veryNewParks);
  }
  useEffect(() => {
    saveJSONToLocalStorage("parkData", parkData);
  }, [parkData]);

  return (
    <div className="grid-layout-app">
      <Header title="map" />

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
            {parkData.length > 0 &&
              parkData.map((park) => (
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
                  <BsFillCircleFill
                    className={park.isStarred ? "red-dot" : "hidden"}
                  />
                </Marker>
              ))}

            {selectedPark ? (
              <Link to={`/single-park/${mapID}`}>
                <Popup
                  className="popup"
                  latitude={Number(selectedPark.coordinates[0])}
                  longitude={Number(selectedPark.coordinates[1])}
                  onClose={() => {
                    setSelectedPark(null);
                  }}
                  closeOnClick={false}
                >
                  <div>
                    <h3>{selectedPark.name}</h3>
                    <p>{selectedPark.address}</p>
                  </div>
                  <AiFillStar
                    onClick={(e) => {
                      e.preventDefault();
                      handleStarClick(selectedPark.name);
                    }}
                    className={
                      selectedPark.isStarred
                        ? "park-gold-star"
                        : "park-dull-star"
                    }
                  />
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
  function initialLoad() {
    const parkDemDates = getItemsFromLocalStorage("parkData");
    if (parkDemDates.length === 0) {
      return parksData.park;
    } else {
      return parkDemDates;
    }
  }
}
