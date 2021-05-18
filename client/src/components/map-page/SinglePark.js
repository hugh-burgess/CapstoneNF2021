import Navigation from "../navigation/Navigation";
import "./SinglePark.css";
import { useState } from "react";
import {
  getItemsFromLocalStorage,
  addNotetoLocalStorage,
} from "../../utils/itemStorage";
import useParks from "../../hooks/useParks";

export default function SinglePark() {
  const [note, setNote] = useState("");
  const [parkData, setParkData] = useParks();
  const pathname = window.location.pathname; // turns this into useLocation later
  const geo = pathname.slice(13).replace(/-/g, ".");
  const selectedPark = parkData.find((park) =>
    park.coordinates[0].includes(geo)
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
          <button type="submit">Leave a Note</button>
        </form>
      </main>
      <footer className="footer">
        <Navigation />
      </footer>
    </div>
  );
}
