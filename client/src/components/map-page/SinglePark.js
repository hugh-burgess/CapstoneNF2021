import Navigation from "../Navigation";
import parksData from "../../parks.json";
import "./SinglePark.css";
import { useEffect, useState } from "react";
import {
  saveJSONToLocalStorage,
  getItemsFromLocalStorage,
  addNotetoLocalStorage,
} from "../../utils/itemStorage";

function initialLoad() {
  const retrieveArray = getItemsFromLocalStorage("parkData");
  if (retrieveArray.length === 0) {
    return parksData;
  } else {
    return retrieveArray;
  }
}

export default function SinglePark() {
  const [note, setNote] = useState("");
  const [parkData, setParkData] = useState(initialLoad());
  const pathname = window.location.pathname; // turns this into useLocation later
  const geo = pathname.slice([13]).replace(/-/g, ".");
  const selectedPark = parkData.find((park) =>
    park.coordinates[0].includes(geo)
  );
  function handleSubmit(e) {
    e.preventDefault();
    console.log(selectedPark.name);

    addNotetoLocalStorage("parkData", selectedPark, note);
    setParkData(getItemsFromLocalStorage("parkData"));

    setNote("");
  }

  useEffect(() => {
    saveJSONToLocalStorage("parkData", parkData);
  }, [parkData]);

  function handleNoteChange(e) {
    setNote(e.target.value);
  }

  return (
    <div>
      {parkData
        .filter((park) => park.coordinates[0].includes(geo))
        .map((filteredPark) => (
          <div key={geo}>
            <header className="header">
              <h1 className="cover-title">{filteredPark.name}</h1>
            </header>
            <main className="main single-park-page">
              <p class="single-park-address">Address: {filteredPark.address}</p>
              <p className="single-park-updates-title">Updates</p>
              <div className="single-park-updates-content">Updates here</div>
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
        ))}
    </div>
  );
}
