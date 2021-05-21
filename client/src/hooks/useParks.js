import { useEffect, useState } from "react";
import {
  getItemsFromLocalStorage,
  saveJSONToLocalStorage,
} from "../utils/itemStorage";
import parksData from "../lib/parks.json";

function initialLoad() {
  const retrieveArray = getItemsFromLocalStorage("parkData");
  if (retrieveArray.length === 0) {
    return parksData;
  } else {
    return retrieveArray;
  }
}

export default function useParks() {
  const [parkData, setParkData] = useState(initialLoad());

  useEffect(() => {
    saveJSONToLocalStorage("parkData", parkData);
  }, [parkData]);
  return [parkData, setParkData];
}
