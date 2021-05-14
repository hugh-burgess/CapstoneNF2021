import { TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";
import "./FriendsContent.css";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
export default function CloudRight({
  friend,
  id,
  onDeleteFriend,
  cloudFormationsRight,
  fakeFrensArray,
}) {
  return (
    <div className="cloud-wrapper">
      <div className="cloud-right">
        <Link to={`/single-dog/${id}`}>
          <img
            className="dog-image-right"
            src={fakeFrensArray[getRandomInt(5)]}
            alt="dog"
          />
          <img
            className="cloud-right"
            src={cloudFormationsRight[getRandomInt(3)]}
            alt="cloud"
          />
          <p className="names-right">{friend.name}</p>
        </Link>
        <TiDelete
          className="bin-right"
          onClick={() => onDeleteFriend(friend)}
        />
      </div>
    </div>
  );
}
