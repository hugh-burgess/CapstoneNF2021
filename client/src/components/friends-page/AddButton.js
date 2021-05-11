import { useEffect, useState } from "react";
import "./AddButton.css";
import {
  getItemsFromLocalStorage,
  addItemToLocalStorage,
  removeItemFromLocalStorageByName,
} from "../../utils/itemStorage";
import { ImBin } from "react-icons/im";
import { RiAddCircleFill } from "react-icons/ri";
// import FileUploader from "./FileUploader";
// import axios from "axios";

export default function AddButton() {
  const [isClicked, setIsClicked] = useState(false);
  const [friendName, setFriendName] = useState("");
  // const [imageSource, setImageSource] = useState("");
  const [biography, setBiography] = useState("");
  const [ratings, setRatings] = useState("");
  const [reviewing, setReviewing] = useState("");
  const [fields, setFields] = useState([{ value: null }]);
  const [isStar, setIsStar] = useState(false);
  
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

  function handleBiographyChange(event) {
    setBiography(event.target.value);
  }

  function handleReviewChange(event) {
    setReviewing(event.target.value);
  }

  function handleRatingsChange(event) {
    setRatings(Number(event.target.value));
  }

  function handleStarredClick() {
    setIsStar(!isStar);
  }

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // const formData = new FormData();
    // formData.append("name", friendName);
    // formData.append("file", selectedFile);

    addItemToLocalStorage("friends", {
      name: friendName,
      // imgSrc: imageSource,
      bio: biography,
      stats: fields,
      rating: ratings,
      review: reviewing,
      isStarred: isStar,
      // file: selectedFile,
    });

    const items = getItemsFromLocalStorage("friends");
    setFriends(items);
  }

  function handleRemoveLocalStorage(itemName) {
    removeItemFromLocalStorageByName(itemName);
    const items = getItemsFromLocalStorage("friends");
    setFriends(items);
  }

  function renderItems() {
    return friends.map((friend) => {
      return (
        <p onClick={() => handleRemoveLocalStorage(friend.name)}>
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
          <div className="input-boxes-parent">
            <input
              className="name-input"
              type="text"
              name="friendName"
              placeholder="name goes here..."
              onChange={handleNameChange}
              value={friendName}
            />
            <input
              className="name-input"
              type="text"
              name="biography"
              placeholder="bio goes here..."
              onChange={handleBiographyChange}
              value={biography}
            />
            <div className="stats-wrapper">
              {fields.map((field, idx) => {
                return (
                  <div className="stats-input-parent" key={`${field}-${idx}`}>
                    <input
                      className="name-input"
                      type="text"
                      name="statistics"
                      placeholder="stats goes here..."
                      value={field.value || ""}
                      onChange={(e) => handleChange(idx, e)}

                      //   value={statistics}
                      //   onChange={handleStatsChange}
                    />
                    <button
                      className="stats-add-button"
                      type="button"
                      onClick={() => handleAdd()}
                    >
                      <RiAddCircleFill />
                    </button>
                    <button
                      className="stats-delete-button"
                      type="button"
                      onClick={() => handleRemove(idx)}
                    >
                      <ImBin />
                    </button>
                  </div>
                );
              })}
            </div>
            <input
              className="name-input"
              type="text"
              name="reviewing"
              placeholder="review goes here..."
              onChange={handleReviewChange}
              value={reviewing}
            />
            <select
              className="name-input"
              type="text"
              name="ratings"
              id="ratings"
              placeholder="ratings goes here..."
              onChange={handleRatingsChange}
              value={ratings}
            >
              <option disabled>Rate Your Friend</option>
              <option value="1">1 Star</option>
              <option value="2">2 Star</option>
              <option value="3">3 Star</option>
              <option value="4">4 Star</option>
              <option value="5">5 Star</option>
            </select>
            <button type="button" onClick={handleStarredClick}>
              {isStar ? "Starred!" : "Star"}
            </button>
          </div>
          {/* <FileUploader
              onFileSelectSuccess={(file) => setSelectedFile(file)}
              onFileSelectError={({ error }) => alert(error)}
            /> */}
          <button type="submit" onClick={() => setCount(count + 1)}>
            save
          </button>
          <Expire delay="3000">
            <p>Friends added: {count}</p>
            {renderItems()}
          </Expire>
        </form>
      )}
    </div>
  );
}
