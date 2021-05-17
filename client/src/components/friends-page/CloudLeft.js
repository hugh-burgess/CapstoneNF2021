import { Link } from "react-router-dom";
import "./FriendsContent.css";
import RandomNumber from "../../utils/RandomNumber";

export default function CloudLeft({
  friend,
  id,
  cloudFormationsLeft,
  FakeFrens,
}) {
  return (
    <div className="cloud">
      <Link to={`/single-dog/${id}`}>
        <img
          className="dog-image dog-image-left"
          src={FakeFrens[RandomNumber(5)]}
          alt="dog"
        />
        <img
          className="cloud"
          src={cloudFormationsLeft[RandomNumber(3)]}
          alt="cloud"
        />

        <p className="names names-left">{friend.name}</p>
      </Link>
    </div>
  );
}
