import * as parkData from "../../parks.json";
import Navigation from "../Navigation";
import "./SinglePark.css";
const parks = parkData.park;
export default function SinglePark() {
  //   console.log(parks.coordinates[0]);
  const pathname = window.location.pathname;
  const geo = pathname.slice([13]).replace(/-/g, ".");
  return (
    <div>
      {parks
        .filter((park) => park.coordinates[0].includes(geo))
        .map((filteredPark) => (
          <div>
            <header className="header">
              <h1 className="cover-title">{filteredPark.name}</h1>
            </header>
            <main className="main"></main>
            <footer className="footer">
              <Navigation />
            </footer>
          </div>
        ))}
    </div>
  );
}
