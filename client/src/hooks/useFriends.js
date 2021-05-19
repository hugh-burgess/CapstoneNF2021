import { useEffect, useState } from "react";
import { getItemsFromLocalStorage } from "../utils/itemStorage";

export default function useFriends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const friends = getItemsFromLocalStorage("friends");
    setFriends(friends);
  }, []);
  return [friends, setFriends];
}
