import "./Dogs.css";
import { getItemsFromLocalStorage } from "../../utils/itemStorage";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiSniffingDog } from "react-icons/gi";

import dogOne from "../../images/dogs/dogOne.png";
import dogTwo from "../../images/dogs/dogTwo.png";
import dogThree from "../../images/dogs/dogThree.png";
import dogFour from "../../images/dogs/dogFour.png";
import dogFive from "../../images/dogs/dogFive.png";

const fakeFrensArray = [dogOne, dogTwo, dogThree, dogFour, dogFive];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function Dogs({ filter }) {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const friendsList = getItemsFromLocalStorage("friends");
    setFriends(friendsList);
  }, []);

  const filteredName = friends.filter(
    (friend) => friend.name.toLowerCase().includes(filter) || filter === ""
  );
  console.log(filter);

  function renderFriend() {
    return filteredName.map((friend, index) => {
      return (
        <Link to={`/single-dog/${friend.id}`}>
          <div key={index} className="friend-card">
            <p className="dogs-name">{friend.name}</p>
            <img
              className="dogs-image"
              src={fakeFrensArray[getRandomInt(5)]}
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
