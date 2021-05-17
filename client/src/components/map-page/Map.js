
import Navigation from "../Navigation";
import parksData from "../../parks.json";
import { useEffect, useState } from "react";
import "./SinglePark.css";
import {
  getItemsFromLocalStorage,
  saveJSONToLocalStorage,
} from "../../utils/itemStorage";

import Header from "../Header";
import MapDisplay from "./MapDisplay";

export default function Map() {
  const [parkData, setParkData] = useState(initialLoad());

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
          <MapDisplay handleStarClick={handleStarClick} parkData={parkData} />
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
