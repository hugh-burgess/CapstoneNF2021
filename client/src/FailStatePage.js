import { GiSniffingDog } from "react-icons/gi";
import Header from "./components/header/Header";
import "./components/friends-page/FriendsContent.css";
import { useHistory } from "react-router";

export default function FailStatePage() {
  let history = useHistory();
  return (
    <div className="grid-layout-app">
      <Header title="oh no!" />
      <main className="main false-page">
        <div className="render-div">
          <p className="no-mates-message">
            <p>Looks like there's nothing here</p>
            <br /> <GiSniffingDog className="lost-dog" />
            <br />
            <button onClick={() => history.goBack()}>Go Back</button>
          </p>
        </div>
      </main>
    </div>
  );
}
