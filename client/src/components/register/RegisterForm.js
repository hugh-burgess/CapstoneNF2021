import { Link } from "react-router-dom";

export default function RegisterForm({
  user,
  pass,
  passVerify,
  handleInputUserChange,
  handleInputPassChange,
  handleInputPassVerifyChange,
  handleRegisterSubmit,
  clicked,
}) {
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
        user={user}
        onChange={handleInputUserChange}
      />
      <input
        type="password"
        name="password"
        id="passwordOne"
        placeholder="create a password..."
        className="login-page-password"
        required
        pass={pass}
        onChange={handleInputPassChange}
      />
      <input
        type="password"
        name="password"
        id="passwordTwo"
        placeholder="retype password..."
        className="login-page-password"
        required
        passVerify={passVerify}
        onChange={handleInputPassVerifyChange}
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
