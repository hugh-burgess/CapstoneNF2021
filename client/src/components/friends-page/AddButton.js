import { useEffect, useState } from "react";
import "./AddButton.css";
import {
  getItemsFromLocalStorage,
  addItemToLocalStorage,
  removeItemFromLocalStorageByName,
} from "../../utils/itemStorage";
// import FileUploader from "./FileUploader";
// import axios from "axios";

export default function AddButton() {
  const [isClicked, setIsClicked] = useState(false);
  const [friendName, setFriendName] = useState("");
  const [friends, setFriends] = useState([]);
  const [count, setCount] = useState(0);
  // const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const friends = getItemsFromLocalStorage("friends");
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

    addItemToLocalStorage("friends", {
      name: friendName,
      imgSrc: String,
      bio: String,
      stats: Array,
      rating: Number,
      review: String,
      isStarred: Boolean,
      // file: selectedFile,
    });

    const items = getItemsFromLocalStorage("friends");
    setFriends(items);
  }

  function handleRemove(itemName) {
    removeItemFromLocalStorageByName(itemName);
    const items = getItemsFromLocalStorage("friends");
    setFriends(items);
  }

  function renderItems() {
    return friends.map((friend, id) => {
      return (
        <p id={id} key={id} onClick={() => handleRemove(friend.name)}>
          - {friend.name}
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

  // delete the rendered message after 2 seconds
  const Expire = (props) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setVisible(false);
      }, props.delay);
    }, [props.delay]);
    return visible ? <div>{props.children}</div> : <div />;
  };

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
          <button type="submit" onClick={() => setCount(count + 1)}>
            save
          </button>
          <Expire delay="3000">
            <p>New friends added: {count}</p>
            {renderItems()}
          </Expire>
        </form>
      )}
    </div>
  );
}
