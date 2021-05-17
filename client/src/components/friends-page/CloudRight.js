import { Link } from "react-router-dom";
import "./FriendsContent.css";
import randomNumber from "../../utils/randomNumber";

export default function CloudRight({
  friend,
  id,
  cloudFormationsRight,
  fakeFrens,
}) {
  return (
    <div className="cloud-wrapper">
      <div className="cloud cloud-right">
        <Link to={`/single-dog/${id}`}>
          <img
            className=" dog-image dog-image-right"
            src={fakeFrens[randomNumber(5)]}
            alt="dog"
          />
          <img
            className="cloud cloud-right"
            src={cloudFormationsRight[randomNumber(3)]}
            alt="cloud"
          />
          <p className="names names-right">{friend.name}</p>
        </Link>
      </div>
    </div>
  );
}
