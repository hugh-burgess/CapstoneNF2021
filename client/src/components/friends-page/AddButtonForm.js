import { useEffect, useState } from "react";
import { ImBin } from "react-icons/im";
import { RiAddCircleFill } from "react-icons/ri";
import {
  getItemsFromLocalStorage,
  addItemToLocalStorage,
  removeItemFromLocalStorageByName,
} from "../../utils/itemStorage";

export default function AddButtonForm({
  handleButtonClick,
  friends,
  setFriends,
}) {
  const [count, setCount] = useState(0);
  const [friendName, setFriendName] = useState("");
  const [biography, setBiography] = useState("");
  const [ratings, setRatings] = useState("");
  const [reviewing, setReviewing] = useState("");
  const [isStar, setIsStar] = useState(false);
  const [fields, setFields] = useState([{ value: null }]);

  function handleRemoveLocalStorage(itemName) {
    removeItemFromLocalStorageByName(itemName);
    const items = getItemsFromLocalStorage("friends");
    setFriends(items);
  }

  const Expire = (props) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setVisible(false);
      }, props.delay);
    }, [props.delay]);
    return visible ? <div>{props.children}</div> : <div />;
  };

  function renderItems() {
    return friends.map((friend) => {
      return (
        <p onClick={() => handleRemoveLocalStorage(friend.name)}>
          - {friend.name}
        </p>
      );
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    addItemToLocalStorage("friends", {
      name: friendName,
      // imgSrc: imageSource,
      bio: biography,
      stats: fields,
      rating: ratings,
      review: reviewing,
      isStarred: isStar,
    });

    const items = getItemsFromLocalStorage("friends");
    setFriends(items);
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

  return (
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
          required
        />
        <input
          className="name-input"
          type="text"
          name="biography"
          maxLength="125"
          placeholder="bio goes here..."
          onChange={handleBiographyChange}
          value={biography}
          required
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

      <button type="submit" onClick={() => setCount(count + 1)}>
        save
      </button>
      <Expire delay="3000">
        <p>Friends added: {count}</p>
        {renderItems()}
      </Expire>
    </form>
  );
}
