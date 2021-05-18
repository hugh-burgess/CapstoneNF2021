import "./Dogs.css";
import { Link } from "react-router-dom";
import { GiSniffingDog } from "react-icons/gi";
import RandomNumber from "../../utils/RandomNumber";
import FakeFrens from "../../utils/FakeFrens";
import useFriends from "../../hooks/useFriends";
import { getDogsFilteredByName } from "../../utils/dogs";

export default function Dogs({ filter }) {
  const [friends, setFriends] = useFriends();
  console.log(setFriends); // where to use this?
  const filteredDogs = getDogsFilteredByName(friends, filter);

  function renderFriend() {
    return filteredDogs.map((friend, index) => {
      return (
        <Link to={`/single-dog/${friend.id}`}>
          <div key={index} className="friend-card">
            <p className="dogs-name">{friend.name}</p>
            <img
              className="dogs-image"
              src={FakeFrens()[RandomNumber(5)]}
              alt="dog"
            />
          </div>
        </Link>
      );
    });
  }

  return (
    <div className="conditional-div">
      {filteredDogs < 1 && (
        <div className="render-div">
          <p className="no-mates-message">
            Nothing to find <br /> here!
            <br />
            <br />
            <GiSniffingDog />
          </p>
        </div>
      )}

      {filteredDogs && renderFriend()}
    </div>
  );
}
