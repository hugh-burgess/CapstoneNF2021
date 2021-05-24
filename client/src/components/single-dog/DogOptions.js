import { ImBin, ImBubble } from "react-icons/im";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
  getSingleDogFromLocalStorage,
  removeItemFromLocalStorageById,
} from "../../utils/itemStorage";
import { AiFillStar } from "react-icons/ai";
import useFriends from "../../hooks/useFriends";

export default function DogOptions({ id }) {
  const [friends, setFriends] = useFriends();
  let history = useHistory();
  let location = useLocation();

  function handleDeleteFriend(friend) {
    removeItemFromLocalStorageById("friends", friend.id);

    history.push("/friends");
  }
  const filteredFriend = getSingleDogFromLocalStorage(
    Number(location.pathname.slice(12))
  );

  function handleStarredClick(boolean) {
    return (
      <div>
        {boolean === true ? (
          <div>
            <AiFillStar className="gold-star" onClick={() => starredClick()} />
          </div>
        ) : (
          <div>
            <AiFillStar className="dull-star" onClick={() => starredClick()} />
          </div>
        )}
      </div>
    );
  }

  function starredClick() {
    let index;
    friends.forEach((friend, i) => {
      if (friend.id === filteredFriend.id) {
        index = i;
      }
    });
    filteredFriend.isStarred = !filteredFriend.isStarred;
    const veryNewFriends = [
      ...friends.slice(0, index),
      filteredFriend,
      ...friends.slice(index + 1),
    ];
    setFriends(veryNewFriends);
    localStorage.setItem("friends", JSON.stringify(veryNewFriends));
  }

  return (
    <div className="options-wrapper">
      <div class="single-dog-options">
        <div className="single-dog-starred">
          <p className="single-dog-starred-content">
            {handleStarredClick(filteredFriend.isStarred)}
          </p>
        </div>
        <div className="single-dog-message">
          <p className="single-dog-message-content">
            <Link to={`/whistle/${id}`}>
              <ImBubble className="messaging-bubble" />
            </Link>
          </p>
        </div>
        <div className="single-dog-delete">
          <p className="single-dog-delete-content">
            <ImBin onClick={() => handleDeleteFriend(filteredFriend)} />
          </p>
        </div>
      </div>
    </div>
  );
}
