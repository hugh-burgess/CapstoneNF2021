import Navigation from "../navigation/Navigation";
import "./SinglePark.css";
import LeaveANote from "./LeaveANote";
import { useParams } from "react-router";
import useParks from "../../hooks/useParks";

export default function SinglePark() {
  const [parkData, setParkData] = useParks();
  const { mapID } = useParams();
  const coordinatesID = mapID.replace(/-/g, ".");

  const selectedPark = parkData.find(
    (park) => park.coordinates[0] === coordinatesID
  );

  return (
    <div>
      <div className="header">
        <h1 className="park-title">{selectedPark.name}</h1>
      </div>
      <main className="main single-park-page">
        <p className="single-park-address">Address: {selectedPark.address}</p>
        <p className="single-park-updates-title">Updates</p>
        <div className="single-park-updates-content">
          {selectedPark.notes.map((note, i) => (
            <li key={i}>{note}</li>
          ))}
        </div>
        <LeaveANote selectedPark={selectedPark} setParkData={setParkData} />
      </main>
      <footer className="footer">
        <Navigation />
      </footer>
    </div>
  );
}
