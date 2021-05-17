import { TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";
import "./FriendsContent.css";
import RandomNumber from "../../utils/RandomNumber";

export default function CloudRight({
  friend,
  id,
  onDeleteFriend,
  cloudFormationsRight,
  fakeFrensArray,
}) {
  return (
    <div className="cloud-wrapper">
      <div className="cloud cloud-right">
        <Link to={`/single-dog/${id}`}>
          <img
            className=" dog-image dog-image-right"
            src={fakeFrensArray[RandomNumber(5)]}
            alt="dog"
          />
          <img
            className="cloud cloud-right"
            src={cloudFormationsRight[RandomNumber(3)]}
            alt="cloud"
          />
          <p className="names names-right">{friend.name}</p>
        </Link>
        <TiDelete
          className="bin-right"
          onClick={() => onDeleteFriend(friend)}
        />
      </div>
    </div>
  );
}
