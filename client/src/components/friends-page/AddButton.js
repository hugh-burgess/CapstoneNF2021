import { useState } from "react";
import { GrFormAdd } from "react-icons/gr";
import "./AddButton.css";

export default function AddButton() {
  const [isClicked, setIsClicked] = useState(false);
  const [friendName, setFriendName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  function handleButtonClick(event) {
    event.preventDefault();
    setIsClicked(!isClicked);
    console.log(isClicked);
  }

  function handleNameChange(event) {
    setFriendName(event.target.value);
    console.log(event.target.value);
  }

  function onBrowseFileChange(event) {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
  }

  return (
    <div className="add-friend-wrapper">
      <div className="add-friend-button">
        {!isClicked && (
          <button onClick={handleButtonClick}>
            Add A Friend
            <GrFormAdd />
          </button>
        )}
        {isClicked && (
          <form className="popup-box">
            <button onClick={handleButtonClick} className="popup-delete">
              <p>close</p>
            </button>
            <input
              type="text"
              name="friendName"
              placeholder="name goes here..."
              onChange={handleNameChange}
              value={friendName}
            />
            <input
              type="file"
              value={selectedFile}
              onChange={onBrowseFileChange}
            />
            <button onClick={handleButtonClick}>submit</button>
          </form>
        )}
      </div>
    </div>
  );
}
