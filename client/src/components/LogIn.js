import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getItemsFromLocalStorage } from "../utils/itemStorage";

import "./LogIn.css";
import LogInForm from "./LogInForm";
const baseUrl = "  https://shielded-tundra-69796.herokuapp.com/login";

export default function Cover() {
  const [user, setUser] = useState([]);
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    const user = getItemsFromLocalStorage("user");
    setUser(user);
  }, []);

  let history = useHistory();

  function handleLogInSubmit(e) {
    e.preventDefault();
    const initDetails = {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      mode: "cors",
      body: JSON.stringify({
        username: e.target[0].value,
        password: e.target[1].value,
      }),
    };
    fetch(baseUrl, initDetails)
      .then((res) => {
        if (res.status !== 200) {
          setClicked(!clicked);
          e.target[0].value = "";
          e.target[1].value = "";
          alert("There was an error, please check again.");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        if (data.login === true && user.length === 0) {
          history.push("/create");
        } else if (data.login === true && user.length !== 0) {
          history.push("/profile");
        } else {
          setClicked(!clicked);
        }
      })
      .catch((err) => {
        console.error(err);
        setClicked(!clicked);
      });
  }

  return <LogInForm handleLogInSubmit={handleLogInSubmit} clicked={clicked} />;
}
