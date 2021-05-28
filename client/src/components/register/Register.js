import { useState } from "react";
import { SiDatadog } from "react-icons/si";
import { useHistory } from "react-router";
import { addProfileToLocalStorage } from "../../utils/itemStorage";
import SlideUpAnimation from "../animations/SlideUpAnimation";

import "../log-in/LogIn.css";
import RegisterForm from "./RegisterForm";
const baseUrl = "/api/login/register";

export default function Register() {
  const [clicked, setClicked] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [passVerify, setPassVerify] = useState("");

  function handleInputUserChange(e) {
    setUser(e.target.value);
  }
  function handleInputPassChange(e) {
    setPass(e.target.value);
  }
  function handleInputPassVerifyChange(e) {
    setPassVerify(e.target.value);
  }

  let history = useHistory();

  const profile = { user, pass };
  function handleRegisterSubmit(e) {
    e.preventDefault();

    const Details = {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        username: user,
        password: pass,
      }),
    };
    fetch(baseUrl, Details)
      .then((res) => {
        if (e.target[1].value !== e.target[2].value) {
          alert("Passwords dont match, please check again.");
          return;
        } else {
          addProfileToLocalStorage("owner", profile);
          setClicked(!clicked);
          console.log(res.status);
          return res.json(Details);
        }
      })
      .then((data) => {
        if (data.newUserCreated === true) {
          console.log(data);
          alert("Account created! Please log in to continue");
          history.push("/");
        } else {
          setClicked(!clicked);
          e.target[0].value = "";
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <div className="cover-page">
      <div className="cover-box-light-blue">
        <div className="app-title-wrapper">
          <h1 className="app-title">Walkies&amp;Talkies</h1>
        </div>
      </div>
      <div className="login-page-wrapper">
        <SlideUpAnimation />
        <SiDatadog className="login-page-dog swing" />

        <RegisterForm
          user={user}
          pass={pass}
          passVerify={passVerify}
          handleInputUserChange={handleInputUserChange}
          handleInputPassChange={handleInputPassChange}
          handleInputPassVerifyChange={handleInputPassVerifyChange}
          handleRegisterSubmit={handleRegisterSubmit}
          clicked={clicked}
        />
      </div>
    </div>
  );
}
