import "./FriendsContent.css";

import { getItemsFromLocalStorage } from "../../utils/itemStorage";
import { useEffect, useState } from "react";
import { GiSittingDog } from "react-icons/gi";
import CloudRight from "./CloudRight";
import CloudLeft from "./CloudLeft";
import FakeFrens from "../../utils/FakeFrens";
import CloudFormationsLeft from "../../utils/CloudFormationsLeft";
import CloudFormationsRight from "../../utils/CloudFormationsRight";

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
            CloudFormationsRight={CloudFormationsRight()}
            FakeFrens={FakeFrens()}
          />
        );
      } else {
        return (
          <CloudLeft
            friend={friend}
            id={friend.id}
            CloudFormationsLeft={CloudFormationsLeft()}
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
