import "./FriendsContent.css";
import cloudOne from "../../images/cloudOne.svg";
import cloudTwo from "../../images/cloudTwo.svg";
import cloudThree from "../../images/cloudThree.svg";
import cloudFour from "../../images/cloudFour.svg";
import cloudFive from "../../images/cloudFive.svg";

import dogOne from "../../images/dogs/dogOne.png";
import dogTwo from "../../images/dogs/dogTwo.png";
import dogThree from "../../images/dogs/dogThree.png";
import dogFour from "../../images/dogs/dogFour.png";
import dogFive from "../../images/dogs/dogFive.png";

import { getItemsFromLocalStorage } from "../../utils/itemStorage";
import { useEffect, useState } from "react";

export default function FriendsContent() {
  const [count, setCount] = useState(0);

  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const friends = getItemsFromLocalStorage("friends");
    setFriends(friends);
    console.log(friends);
  }, []);

  function renderItems() {
    return friends.map((friend, id) => {
      return (
        <div className="clouds-wrapper">
          <div className="cloud-right">
            <p className="names-right">{friend.name}</p>
            <img src={cloudOne} alt="cloud" />
            <img className="dog-image-right" src={dogOne} alt="dog" />
          </div>
          <div className="cloud-left">
            <img className="dog-image-left" src={dogTwo} alt="dog" />
            <img src={cloudTwo} alt="cloud" />
            <p className="names-left">{friend.name}</p>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="conditional-div">
      {friends < 1 && (
        <div className="render-div">
          <p>no mates</p>
        </div>
      )}

      {friends && renderItems()}
    </div>
  );
}
