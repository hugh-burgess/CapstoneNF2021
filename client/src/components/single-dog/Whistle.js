import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getItemsFromLocalStorage } from "../../utils/itemStorage";
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
        <header className="header">
          <h1 className="cover-title">whistle</h1>
        </header>
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
