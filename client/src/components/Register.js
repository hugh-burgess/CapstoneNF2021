export default function Register() {

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
          history.push("/");
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
        <h1 className="cover-title">Walkies&amp;Talkies</h1>
      </div>
      <div className="login-page-wrapper">
        <SiDatadog className="login-page-dog" />

        <form className="login-form" onSubmit={handleRegisterSubmit}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="create username..."
            className="login-page-username"
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
          <div className="login-buttons-wrapper">
            <button type="submit" className="login-page-register-button">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );

}
