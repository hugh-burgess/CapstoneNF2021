import { SiDatadog } from "react-icons/si";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import "./LogIn.css";
const baseUrl = "http://localhost:4000/login";

export default function Cover() {
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
          alert("There was an error, please check again.");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        if (data.login === true) {
          history.push("/profile");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="cover-page">
      <div className="cover-box-light-blue">
        <h1 className="cover-title">Walkies&amp;Talkies</h1>
      </div>
      <div className="login-page-wrapper">
        <SiDatadog className="login-page-dog" />

        <form className="login-form" onSubmit={handleLogInSubmit}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username..."
            className="login-page-username"
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password..."
            className="login-page-password"
            required
          />
          <div className="login-buttons-wrapper">
            <button type="submit" className="login-page-login-button">
              Log In
            </button>
            <Link to="/register">
              <button type="submit" className="login-page-register-button">
                Register
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
