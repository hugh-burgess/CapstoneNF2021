import { TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";
import "./FriendsContent.css";
import RandomNumber from "../../utils/RandomNumber";

export default function CloudLeft({
  friend,
  id,
  onDeleteFriend,
  cloudFormationsLeft,
  fakeFrensArray,
}) {
  return (
    <div className="cloud">
      <Link to={`/single-dog/${id}`}>
        <img
          className="dog-image dog-image-left"
          src={fakeFrensArray[RandomNumber(5)]}
          alt="dog"
        />
        <img
          className="cloud"
          src={cloudFormationsLeft[RandomNumber(3)]}
          alt="cloud"
        />

        <p className="names names-left">{friend.name}</p>
      </Link>
      <TiDelete className="bin-left" onClick={() => onDeleteFriend(friend)} />
    </div>
  );
}
