import "./FriendsContent.css";
import { GiSittingDog } from "react-icons/gi";
import CloudRight from "./CloudRight";
import CloudLeft from "./CloudLeft";
import FakeFrens from "../../utils/FakeFrens";
import CloudFormationsLeft from "../../utils/CloudFormationsLeft";
import CloudFormationsRight from "../../utils/CloudFormationsRight";
import useFriends from "../../hooks/useFriends";
import FriendCloudAnimation from "../animations/FriendCloudAnimation";


export default function FriendsContent() {
  const [friends] = useFriends();

  function renderItems() {
    return <FriendCloudAnimation />;

  }

  return (
    <div className="conditional-div">
      {friends < 1 && (
        <div className="render-div">
          <p className="no-mates-message">
            you dont have <br /> any frens yet!
            <br /> <GiSittingDog />
          </p>
        </div>
      )}

      {friends && renderItems()}
    </div>
  );
}
