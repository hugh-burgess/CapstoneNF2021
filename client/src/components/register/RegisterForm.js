import { Link } from "react-router-dom";
import { useHistory } from "react-router";

export default function RegisterForm({ handleRegisterSubmit, clicked }) {
  let history = useHistory();

  return (
    <form
      className="login-form"
      autoComplete="off"
      onSubmit={handleRegisterSubmit}
    >
      <input
        type="text"
        name="username"
        id="username"
        placeholder="create username..."
        className={clicked ? "register-red-warning" : "login-page-username"}
        required
      />
      <input
        type="password"
        name="password"
        id="passwordOne"
        placeholder="create a password..."
        className="login-page-password"
        required
      />
      <input
        type="password"
        name="password"
        id="passwordTwo"
        placeholder="retype password..."
        className="login-page-password"
        required
      />
      <div className={clicked ? "register-message-warning" : "hidden"}>
        This name is already taken, please choose another.
      </div>

      <div className="login-buttons-wrapper">
        <button type="submit" className="generic-button">
          Sign Up
        </button>
        <Link to="/">
          <button className="generic-button">Back</button>
        </Link>
      </div>
    </form>
  );
}
