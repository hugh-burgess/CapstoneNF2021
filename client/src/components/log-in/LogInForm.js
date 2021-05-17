import { SiDatadog } from "react-icons/si";
import { Link } from "react-router-dom";

export default function LogInForm({ handleLogInSubmit, clicked }) {
  return (
    <div className="cover-page">
      <div className="cover-box-light-blue">
        <div className="app-title-wrapper">
          <h1 className="app-title">Walkies&amp;Talkies</h1>
        </div>
      </div>
      <div className="login-page-wrapper">
        <SiDatadog className="login-page-dog" />

        <form
          className="login-form"
          autoComplete="off"
          onSubmit={handleLogInSubmit}
        >
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username..."
            className={clicked ? "register-red-warning" : "login-page-username"}
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password..."
            className={clicked ? "register-red-warning" : "login-page-password"}
            required
          />
          <div className={clicked ? "register-message-warning" : "hidden"}>
            username or password invalid. Please retry...{" "}
          </div>
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
