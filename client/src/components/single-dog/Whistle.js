import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getItemsFromLocalStorage } from "../../utils/itemStorage";
import Header from "../Header";
import Navigation from "../Navigation";
import "./Whistle.css";

export default function Whistle() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const friends = getItemsFromLocalStorage("friends");
    setFriends(friends);
    console.log(friends);
  }, []);

  let { id } = useParams();

  const singleDog = friends.filter((dog, index) =>
    id.includes(index + dog.name)
  );

  return singleDog.map((friend) => {
    return (
      <div className="whistle-page">
        <Header title="whistle" />

        <main className="main whistle-page">
          <div className="whistle-messages"></div>
          <div className="whistle-message-box">
            <div className="whistle-message-input-text">
              Send a message to {friend.id}...
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
  });
}
