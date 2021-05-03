import "./FriendsContent.css";
import cloudOne from "../../images/cloudOne.svg";
import cloudTwo from "../../images/cloudTwo.svg";
// import cloudThree from "../../images/cloudThree.svg";
// import cloudFour from "../../images/cloudFour.svg";
// import cloudFive from "../../images/cloudFive.svg";

// import dogOne from "../../images/dogs/dogOne.png";
// import dogTwo from "../../images/dogs/dogTwo.png";
// import dogThree from "../../images/dogs/dogThree.png";
// import dogFour from "../../images/dogs/dogFour.png";
// import dogFive from "../../images/dogs/dogFive.png";

import { getItemsFromLocalStorage } from "../../utils/itemStorage";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TiDelete } from "react-icons/ti";
import { GiSittingDog } from "react-icons/gi";

export default function FriendsContent() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const friends = getItemsFromLocalStorage("friends");
    setFriends(friends);
    console.log(friends);
  }, []);

  function handleDeleteFriend(index) {
    const veryNewFriends = [
      ...friends.slice(0, index),
      ...friends.slice(index + 1),
    ];
    setFriends(veryNewFriends);
    localStorage.setItem("friends", JSON.stringify(veryNewFriends));
  }

  function renderItems() {
    return friends.map((friend, index) => {
      const id = `${index}${friend.name}`; // hardcoded dog id which could be an issue in future
      if (index % 2 === 0) {
        return (
          <>
            {" "}
            <div className="clouds-wrapper">
              <div key={index} className="cloud-right">
                <Link to={`/single-dog/${id}`}>
                  <p className="names-right">{friend.name}</p>
                  <img src={cloudOne} alt="cloud" />
                  <img
                    className="dog-image-right"
                    src={friend.imgSrc}
                    alt="dog"
                  />
                </Link>
                <TiDelete
                  className="bin-right"
                  onClick={() => handleDeleteFriend(index)}
                />
              </div>
            </div>
          </>
        );
      }
      if (!index % 2 === 0) {
        return (
          <>
            <div className="clouds-wrapper">
              <div className="cloud-left">
                <Link to={`/single-dog/${id}`}>
                  <img
                    className="dog-image-left"
                    src={friend.imgSrc}
                    alt="dog"
                  />
                  <img src={cloudTwo} alt="cloud" />
                  <p className="names-left">{friend.name}</p>
                </Link>
                <TiDelete
                  className="bin-left"
                  onClick={() => handleDeleteFriend(index)}
                />
              </div>
            </div>
          </>
        );
      }
      return renderItems();
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
