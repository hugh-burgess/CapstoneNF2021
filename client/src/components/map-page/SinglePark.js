import Navigation from "../navigation/Navigation";
import "./SinglePark.css";
import { useState } from "react";
import {
  getItemsFromLocalStorage,
  addNotetoLocalStorage,
} from "../../utils/itemStorage";
import useParks from "../../hooks/useParks";
import { useParams } from "react-router";

export default function SinglePark() {
  const { mapID } = useParams();
  const [note, setNote] = useState("");
  const [parkData, setParkData] = useParks();
  const coordinatesID = mapID.replace(/-/g, ".");
  console.log(parkData[0].coordinates[0]);
  const selectedPark = parkData.find(
    (park) => park.coordinates[0] === coordinatesID
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (!note) {
      alert("Please write in a note!");
    } else {
      addNotetoLocalStorage("parkData", selectedPark, note);
      setParkData(getItemsFromLocalStorage("parkData"));

      setNote("");
    }
  }

  function handleNoteChange(e) {
    setNote(e.target.value);
  }

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
        <form className="single-park-form" onSubmit={handleSubmit}>
          <input
            className="single-park-form-input"
            name="note"
            placeholder="leave a note for others..."
            value={note}
            onChange={handleNoteChange}
            type="input"
          />
          <button className="generic-button" type="submit">
            Leave a Note
          </button>
        </form>
      </main>
      <footer className="footer">
        <Navigation />
      </footer>
    </div>
  );
}
