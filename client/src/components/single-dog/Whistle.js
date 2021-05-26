import { useParams } from "react-router";
import { getSingleDogFromLocalStorage } from "../../utils/itemStorage";
import Header from "../header/Header";
import "./Whistle.css";

export default function Whistle() {
  const { id } = useParams();
  const friend = getSingleDogFromLocalStorage(Number(id));

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
    </div>
  );
}
