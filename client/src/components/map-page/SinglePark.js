import Navigation from "../navigation/Navigation";
import "./SinglePark.css";
import LeaveANote from "./LeaveANote";
import { useParams } from "react-router";
import useParks from "../../hooks/useParks";
import {
  getItemsFromLocalStorage,
  removeNoteFromLocalStorageById,
} from "../../utils/itemStorage";

export default function SinglePark() {
  const [parkData, setParkData] = useParks();
  const { mapID } = useParams();
  const coordinatesID = mapID.replace(/-/g, ".");

  const selectedPark = parkData.find(
    (park) => park.coordinates[0] === coordinatesID
  );

  function handleDeleteNote(id) {
    removeNoteFromLocalStorageById(coordinatesID, id);
    setParkData(getItemsFromLocalStorage("parkData"));
  }

  return (
    <div>
      <div className="header">
        <h1 className="park-title">{selectedPark.name}</h1>
      </div>
      <main className="main single-park-page">
        <div className="park-information-card">
          <p className="single-park-address">{selectedPark.address}</p>
          {selectedPark.notes.length > 0 && (
            <p className="single-park-updates-title">Updates</p>
          )}
          <div className="single-park-updates-content">
            {selectedPark.notes.map((note, id, index) => (
              <div className="note-and-clear-wrapper">
                <li className="note-content" id={index} key={id}>
                  {note}
                </li>
                <button
                  className="clear-button"
                  key={index}
                  onClick={() => handleDeleteNote(id)}
                >
                  clear
                </button>
              </div>
            ))}
          </div>
        </div>
        <LeaveANote selectedPark={selectedPark} setParkData={setParkData} />
      </main>
      <footer className="footer">
        <Navigation />
      </footer>
    </div>
  );
}
