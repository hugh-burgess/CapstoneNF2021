import "./FriendsContent.css";

import {
  getItemsFromLocalStorage,
  removeItemFromLocalStorageById,
} from "../../utils/itemStorage";
import { useEffect, useState } from "react";
import { GiSittingDog } from "react-icons/gi";
import CloudRight from "./CloudRight";
import CloudLeft from "./CloudLeft";
import FakeFrens from "../../utils/FakeFrens";
import cloudFormationsLeft from "../../utils/CloudFormationsLeft";
import cloudFormationsRight from "../../utils/CloudFormationsRight";

export default function FriendsContent() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const friends = getItemsFromLocalStorage("friends");
    setFriends(friends);
  }, []);

  function renderItems() {
    return friends.map((friend, index) => {
      if (index % 2 === 0) {
        return (
          <CloudRight
            friend={friend}
            id={friend.id}
            cloudFormationsRight={cloudFormationsRight()}
            FakeFrens={FakeFrens()}
          />
        );
      } else {
        return (
          <CloudLeft
            friend={friend}
            id={friend.id}
            cloudFormationsLeft={cloudFormationsLeft()}
            FakeFrens={FakeFrens()}
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
