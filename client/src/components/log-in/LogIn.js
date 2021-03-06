import { useState } from "react";
import { useHistory } from "react-router-dom";
import useUser from "../../hooks/useUser";

import "./LogIn.css";
import LogInForm from "./LogInForm";
const baseUrl = "/api/login";

export default function Cover() {
  const [user, setUser] = useUser();
  const [clicked, setClicked] = useState(false);

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

  return (
    <LogInForm
      setUser={setUser} // where else can this go ?
      handleLogInSubmit={handleLogInSubmit}
      clicked={clicked}
    />
  );
}
