import { Link } from "react-router-dom";
import "./FriendsContent.css";
import randomNumber from "../../utils/randomNumber";

export default function CloudLeft({
  friend,
  id,
  cloudFormationsLeft,
  fakeFrens,
}) {
  return (
    <div className="cloud">
      <Link to={`/single-dog/${id}`}>
        <img
          className="dog-image dog-image-left"
          src={fakeFrens[randomNumber(5)]}
          alt="dog"
        />
        <img
          className="cloud"
          src={cloudFormationsLeft[randomNumber(3)]}
          alt="cloud"
        />

        <p className="names names-left">{friend.name}</p>
      </Link>
    </div>
  );
}
