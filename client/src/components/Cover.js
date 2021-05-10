import { SiDatadog } from "react-icons/si";
import { Link } from "react-router-dom";
import "./Cover.css";

export default function Cover() {
  function handleLogInHandle(e) {
    e.preventDefault();
  }

  return (
    <div className="cover-page">
      <div className="cover-box-light-blue">
        <h1 className="cover-title">Walkies&amp;Talkies</h1>
      </div>
      <div className="login-page-wrapper">
        <SiDatadog className="login-page-dog" />

        <form className="login-form" onSubmit={handleLogInHandle}>
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
            <Link to="/create">
              <button type="submit" className="login-page-login-button">
                Log In
              </button>
            </Link>
            <Link to="/register">
              <button type="button" className="login-page-register-button">
                Register
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
