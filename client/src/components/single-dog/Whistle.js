import { useLocation } from "react-router";
import { getSingleDogFromLocalStorage } from "../../utils/itemStorage";
import Header from "../Header";
import Navigation from "../Navigation";
import "./Whistle.css";

export default function Whistle() {
  const location = useLocation();

  const friend = getSingleDogFromLocalStorage(
    Number(location.pathname.slice(9))
  );

  return (
    <div className="whistle-page">
      <Header title="whistle" />

      <main className="main whistle-page">
        <div className="whistle-messages"></div>
        <div className="whistle-message-box">
          <div className="whistle-message-input-text">
            Send a message to {friend.name}...
          </div>
          <button className="whistle-message-send" type="submit">
            Send
          </button>
        </div>
      </main>
      <footer className="footer">
        <Navigation />
      </footer>
    </div>
  );
}
