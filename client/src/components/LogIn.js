import { SiDatadog } from "react-icons/si";
import { Link } from "react-router-dom";
import "./LogIn.css";
const baseUrl = "https://shielded-tundra-69796.herokuapp.com/";
const initDetails = {
  method: "get",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  mode: "cors",
};

export default function Cover() {
  function handleLogInSubmit(e) {
    e.preventDefault();

    fetch(baseUrl, initDetails)
      .then((res) => {
        if (res.status !== 200) {
          console.log("There was an error, please check again.");
          return;
        } else {
          console.log(res.headers.get("Content-Type"));
          return res.json();
        }
      })
      .then((data) => console.log(data))
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
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password..."
            className="login-page-password"
          />
          <div className="login-buttons-wrapper">
            <button
              type="submit"
              onClick={handleLogInSubmit}
              className="login-page-login-button"
            >
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
