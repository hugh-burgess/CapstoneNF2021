import { Link } from "react-router-dom";
import "./FriendsContent.css";
import RandomNumber from "../../utils/RandomNumber";

export default function CloudRight({
  friend,
  id,
  CloudFormationsRight,
  FakeFrens,
}) {
  return (
    <div className="cloud-wrapper">
      <div className="cloud cloud-right">
        <Link to={`/single-dog/${id}`}>
          <img
            className=" dog-image dog-image-right"
            src={FakeFrens[RandomNumber(5)]}
            alt="dog"
          />
          <img
            className="cloud cloud-right"
            src={CloudFormationsRight[RandomNumber(3)]}
            alt="cloud"
          />
          <p className="names names-right">{friend.name}</p>
        </Link>
      </div>
    </div>
  );
}
