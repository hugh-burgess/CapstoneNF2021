import { useEffect, useState } from "react";
import "./AddButton.css";
import {
  getItemsFromLocalStorage,
  addItemToLocalStorage,
  removeItemFromLocalStorage,
} from "./itemStorage";
// import FileUploader from "./FileUploader";
// import axios from "axios";

export default function AddButton() {
  const [isClicked, setIsClicked] = useState(false);
  const [friendName, setFriendName] = useState("");
  const [friends, setFriends] = useState([]);
  // const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const friends = getItemsFromLocalStorage();
    setFriends(friends);
  }, []);

  function handleNameChange(event) {
    setFriendName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // const formData = new FormData();
    // formData.append("name", friendName);
    // formData.append("file", selectedFile);
    console.log(`Success! ${friendName} is a new friend.`);

    addItemToLocalStorage({
      name: friendName,
      // file: selectedFile,
    });

    const items = getItemsFromLocalStorage();
    setFriends(items);
  }

  function handleRemove(itemName) {
    removeItemFromLocalStorage(itemName);
    const items = getItemsFromLocalStorage();
    setFriends(items);
  }

  function renderItems() {
    return friends.map((friend, id) => {
      return (
        <p key={id} onClick={() => handleRemove(friend.name)}>
          {friend.name}
        </p>
      );
    });
  }

  // const submitForm = (event) => {
  //   event.preventDefault();
  //   // const url = "https://shielded-tundra-69796.herokuapp.com/friends";
  //   const formData = new FormData();
  //   formData.append("name", friendName);
  //   formData.append("file", selectedFile);

  //   axios
  //     .post(url, formData)
  //     .then((res) => {
  //       alert("File Upload success");
  //       console.log("File Upload success");
  //     })
  //     .catch((err) => alert("File Upload Error"));
  // };

  function handleButtonClick(event) {
    event.preventDefault();
    setIsClicked(!isClicked);
    console.log(isClicked);
  }

  return (
    <div className="add-friend-wrapper">
      {!isClicked && (
        <button className="add-friend-button" onClick={handleButtonClick}>
          Add A Friend
        </button>
      )}
      {isClicked && (
        <form className="popup-box" onSubmit={handleSubmit}>
          <button onClick={handleButtonClick} className="popup-delete">
            close
          </button>
          <input
            className="name-input"
            type="text"
            name="friendName"
            placeholder="name goes here..."
            onChange={handleNameChange}
            value={friendName}
          />
          {/* <FileUploader
              onFileSelectSuccess={(file) => setSelectedFile(file)}
              onFileSelectError={({ error }) => alert(error)}
            /> */}
          <button type="submit">save</button>
          {renderItems()}
        </form>
      )}
    </div>
  );
}
