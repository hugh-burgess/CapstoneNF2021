import { useEffect, useState } from "react";
import { getItemsFromLocalStorage } from "../utils/itemStorage";

export default function useUser() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const user = getItemsFromLocalStorage("user");
    setUser(user);
  }, []);
  return [user, setUser];
}
