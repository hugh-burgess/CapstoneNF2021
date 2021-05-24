import { useState } from "react";
import {
  addNotetoLocalStorage,
  getItemsFromLocalStorage,
} from "../../utils/itemStorage";

export default function LeaveANote({ selectedPark, setParkData }) {
  const [note, setNote] = useState("");
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
    <form className="single-park-form" onSubmit={handleSubmit}>
      <input
        className="single-park-form-input"
        name="note"
        placeholder="leave a note for others..."
        value={note}
        onChange={handleNoteChange}
        type="input"
        maxLength="20"
      />
      <button className="generic-button" type="submit">
        Leave a Note
      </button>
    </form>
  );
}
