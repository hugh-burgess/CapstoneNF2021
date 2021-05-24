import Navigation from "../navigation/Navigation";
import "./SinglePark.css";
import LeaveANote from "./LeaveANote";
import { useParams } from "react-router";
import useParks from "../../hooks/useParks";
import useLocalStorage from "../../hooks/useLocalStorage";
import { getItemsFromLocalStorage } from "../../utils/itemStorage";

export default function SinglePark() {
  const [parkData, setParkData] = useParks();
  const { mapID } = useParams();
  const coordinatesID = mapID.replace(/-/g, ".");

  const selectedPark = parkData.find(
    (park) => park.coordinates[0] === coordinatesID
  );
  const [storedValue, setValue] = useLocalStorage(
    "parkData",
    selectedPark.notes
  );

  console.log(selectedPark.notes.length);
  console.log(selectedPark.notes.length);

  function handleDeleteNote() {
    let index;
    selectedPark.notes.forEach((note, i) => {
      if (note.id === selectedPark.id) {
        index = i;
      }
    });
    const parks = getItemsFromLocalStorage("parkData");

    const newNoteList = [
      ...selectedPark.notes.splice(0, index),
      storedValue,
      ...selectedPark.notes.splice(index + 1),
    ];

    const newData = parks.filter((park) => {
      return park === newNoteList;
    });
    console.log(newData);
    setParkData([...parkData, newData]);
    setValue(newNoteList);
    console.log(newNoteList);
    console.log(`removed: ${newNoteList}`);
    console.log(selectedPark.notes);
    localStorage.setItem(parks, JSON.stringify(parkData));
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
                <li className="note-content" key={id}>
                  {note}
                </li>
                <button
                  className="clear-button"
                  key={index}
                  onClick={handleDeleteNote}
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
