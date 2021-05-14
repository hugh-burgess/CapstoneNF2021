import { useState } from "react";
import { SiDatadog } from "react-icons/si";
import { useHistory } from "react-router";
import "../log-in/LogIn.css";
import RegisterForm from "./RegisterForm";
const baseUrl = "  https://shielded-tundra-69796.herokuapp.com/login/register";

export default function Register() {
  const [clicked, setClicked] = useState(false);
  let history = useHistory();

  function handleRegisterSubmit(e) {
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
        verifyPassword: e.target[2].value,
        bio: "",
        name: "",
        picture: "",
      }),
    };
    fetch(baseUrl, initDetails)
      .then((res) => {
        if (initDetails.body.password !== initDetails.body.verifyPassword) {
          alert("Passwords dont match, please check again.");
          return;
        } else {
          console.log(res.status);
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        if (data.newUserCreated === true) {
          alert("Account created! Please log in to continue");
          history.push("/");
        } else {
          setClicked(!clicked);
          e.target[0].value = "";
        }
      })
      .catch((err) => {
        console.error(err);
        history.push("*");
      });
  }
  return (
    <div className="cover-page">
      <div className="cover-box-light-blue">
        <h1 className="app-title">Walkies&amp;Talkies</h1>
      </div>
      <div className="login-page-wrapper">
        <SiDatadog className="login-page-dog" />
        <RegisterForm
          handleRegisterSubmit={handleRegisterSubmit}
          clicked={clicked}
        />
      </div>
    </div>
  );
}