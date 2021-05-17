import { useEffect, useState } from "react";
import "./AddButton.css";
import { getItemsFromLocalStorage } from "../../utils/itemStorage";

import AddButtonForm from "./AddButtonForm";

export default function AddButton() {
  const [isClicked, setIsClicked] = useState(false);
  // const [imageSource, setImageSource] = useState("");

  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const friends = getItemsFromLocalStorage("friends");
    setFriends(friends);
  }, []);

  function handleButtonClick(event) {
    event.preventDefault();

    setIsClicked(!isClicked);
  }

  return (
    <div className="add-friend-wrapper">
      {!isClicked && (
        <button className="add-friend-button" onClick={handleButtonClick}>
          Add A Friend
        </button>
      )}
      {isClicked && (
        <AddButtonForm
          handleButtonClick={handleButtonClick}
          friends={friends}
          setFriends={setFriends}
        />
      )}
    </div>
  );
}
