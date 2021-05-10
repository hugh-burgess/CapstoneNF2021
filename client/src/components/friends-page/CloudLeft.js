import { TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";
import "./FriendsContent.css";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function CloudLeft({
  friend,
  id,
  onDeleteFriend,
  cloudFormationsLeft,
}) {
  return (
    <div className="cloud-left">
      <Link to={`/single-dog/${id}`}>

        {/* <img className="dog-image-left" src={friend.imgSrc} alt="dog" /> */}
        <img
          className="cloud-left"
          src={cloudFormationsLeft[getRandomInt(3)]}
          alt="cloud"
        />

        <p className="names-left">{friend.name}</p>
      </Link>
      <TiDelete className="bin-left" onClick={() => onDeleteFriend(friend)} />
    </div>
  );
}
