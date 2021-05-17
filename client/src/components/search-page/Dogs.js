import "./Dogs.css";
import { getItemsFromLocalStorage } from "../../utils/itemStorage";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiSniffingDog } from "react-icons/gi";
import RandomNumber from "../../utils/RandomNumber";
import FakeFrens from "../../utils/FakeFrens";

export default function Dogs({ filter }) {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const friendsList = getItemsFromLocalStorage("friends");
    setFriends(friendsList);
  }, []);

  const filteredName = friends.filter(
    (friend) => friend.name.toLowerCase().includes(filter) || filter === ""
  );

  function renderFriend() {
    return filteredName.map((friend, index) => {
      return (
        <Link to={`/single-dog/${friend.id}`}>
          <div key={index} className="friend-card">
            <p className="dogs-name">{friend.name}</p>
            <img
              className="dogs-image"
              src={FakeFrens()[RandomNumber(5)]}
              alt="dog"
            />
          </div>
        </Link>
      );
    });
  }

  return (
    <div className="conditional-div">
      {filteredName < 1 && (
        <div className="render-div">
          <p className="no-mates-message">
            Nothing to find <br /> here!
            <br />
            <br />
            <GiSniffingDog />
          </p>
        </div>
      )}

      {filteredName && renderFriend()}
    </div>
  );
}
