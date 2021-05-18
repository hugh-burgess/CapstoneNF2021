import Navigation from "../navigation/Navigation";
import Header from "../header/Header";
import "./SinglePark.css";
import MapDisplay from "./MapDisplay";
import useParks from "../../hooks/useParks";

export default function Map() {
  const [parkData, setParkData] = useParks();

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
}
