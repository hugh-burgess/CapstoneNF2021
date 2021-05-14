import "./FriendsContent.css";

import {
  getItemsFromLocalStorage,
  removeItemFromLocalStorageById,
} from "../../utils/itemStorage";
import { useEffect, useState } from "react";
import { GiSittingDog } from "react-icons/gi";
import CloudRight from "./CloudRight";
import CloudLeft from "./CloudLeft";

import cloudOne from "../../images/clouds/cloudOne.svg";
import cloudTwo from "../../images/clouds/cloudTwo.svg";
import cloudThree from "../../images/clouds/cloudThree.svg";
import cloudFour from "../../images/clouds/cloudFour.svg";
import cloudFive from "../../images/clouds/cloudFive.svg";
import cloudSix from "../../images/clouds/cloudSix.svg";

import dogOne from "../../images/dogs/dogOne.png";
import dogTwo from "../../images/dogs/dogTwo.png";
import dogThree from "../../images/dogs/dogThree.png";
import dogFour from "../../images/dogs/dogFour.png";
import dogFive from "../../images/dogs/dogFive.png";

const fakeFrensArray = [dogOne, dogTwo, dogThree, dogFour, dogFive];

const cloudFormationsLeft = [cloudTwo, cloudFour, cloudSix];
const cloudFormationsRight = [cloudOne, cloudThree, cloudFive];

export default function FriendsContent() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const friends = getItemsFromLocalStorage("friends");
    setFriends(friends);
  }, []);
  function handleDeleteFriend(friend) {
    removeItemFromLocalStorageById("friends", friend.id);
    setFriends(getItemsFromLocalStorage("friends"));
  }

  function renderItems() {
    return friends.map((friend, index) => {
      if (index % 2 === 0) {
        return (
          <CloudRight
            friend={friend}
            id={friend.id}
            onDeleteFriend={handleDeleteFriend}
            cloudFormationsRight={cloudFormationsRight}
            fakeFrensArray={fakeFrensArray}
          />
        );
      } else {
        return (
          <CloudLeft
            friend={friend}
            id={friend.id}
            onDeleteFriend={handleDeleteFriend}
            cloudFormationsLeft={cloudFormationsLeft}
            fakeFrensArray={fakeFrensArray}
          />
        );
      }
    });
  }

  return (
    <div className="conditional-div">
      {friends < 1 && (
        <div className="render-div">
          <p className="no-mates-message">
            you dont have <br /> any frens yet!
            <br /> <GiSittingDog />
          </p>
        </div>
      )}

      {friends && renderItems()}
    </div>
  );
}
