import { useState } from "react";
import "./AddButton.css";
import useFriends from "../../hooks/useFriends";
import AddButtonForm from "./AddButtonForm";

export default function AddButton() {
  const [isClicked, setIsClicked] = useState(false);
  const [friends, setFriends] = useFriends();
  // const [imageSource, setImageSource] = useState("");

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
