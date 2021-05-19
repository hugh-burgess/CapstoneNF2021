import { useState } from "react";
import "./AddButton.css";
import useFriends from "../../hooks/useFriends";
import AddButtonForm from "./AddButtonForm";

export default function AddButton() {
  const [isClicked, setIsClicked] = useState(false);
  const friends = useFriends();

  function handleButtonClick(event) {
    event.preventDefault();

    setIsClicked(!isClicked);
  }

  return (
    <div className="add-friend-wrapper">
      {!isClicked && (
        <button className="generic-button" onClick={handleButtonClick}>
          Add A Friend
        </button>
      )}
      {isClicked && (
        <AddButtonForm
          handleButtonClick={handleButtonClick}
          friends={friends}
        />
      )}
    </div>
  );
}
