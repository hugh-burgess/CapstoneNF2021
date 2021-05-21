import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import {
  getSingleDogFromLocalStorage,
  removeItemFromLocalStorageById,
} from "../../utils/itemStorage";
import Navigation from "../navigation/Navigation";
import "./SingleDog.css";
import { AiFillStar } from "react-icons/ai";
import { ImBubble } from "react-icons/im";
import { ImBin } from "react-icons/im";
import { FaBone } from "react-icons/fa";
import RandomNumber from "../../utils/RandomNumber";
import FakeFrens from "../../utils/FakeFrens";
import useFriends from "../../hooks/useFriends";

export default function SingleDog() {
  let number = RandomNumber;
  const [friends, setFriends] = useFriends();
  let location = useLocation();
  let { id } = useParams();
  let history = useHistory();

  function handleDeleteFriend(friend) {
    removeItemFromLocalStorageById("friends", friend.id);
    history.push("/friends");
  }

  const filteredFriend = getSingleDogFromLocalStorage(
    Number(location.pathname.slice(12))
  );

  function starredClick() {
    let index;
    friends.forEach((friend, i) => {
      if (friend.id === filteredFriend.id) {
        index = i;
      }
    });
    filteredFriend.isStarred = !filteredFriend.isStarred;
    const veryNewFriends = [
      ...friends.slice(0, index),
      filteredFriend,
      ...friends.slice(index + 1),
    ];
    setFriends(veryNewFriends);
    localStorage.setItem("friends", JSON.stringify(veryNewFriends));
  }

  function handleStarredClick(boolean) {
    return (
      <div>
        {boolean === true ? (
          <div>
            <AiFillStar className="gold-star" onClick={() => starredClick()} />
          </div>
        ) : (
          <div>
            <AiFillStar className="dull-star" onClick={() => starredClick()} />
          </div>
        )}
      </div>
    );
  }

  function createBones(number) {
    const bones = [];
    for (let i = 0; i < number; i++) {
      bones.push(<div className="single-dog-starred-bone">{<FaBone />}</div>);
    }
    return bones;
  }

  function renderDog() {
    return (
      <div className="grid-layout-app">
        <header className="header">
          <div className="single-dog-wrapper">
            <img
              class="single-dog-image"
              src={FakeFrens()[number(5)]}
              alt={filteredFriend.name}
            />
            <h1 className="cover-title">{filteredFriend.name}</h1>
          </div>
        </header>
        <main className="main single-dog-main-wrapper">
          <div key={id} className="single-dog-page">
            <div className="single-dog-overview">
              {filteredFriend.stats[1] && (
                <div className="single-dog-stats">
                  <p className="single-dog-stats-title">Stats</p>
                  <div className="single-dog-content-box">
                    <ul>
                      {filteredFriend.stats.map((stat) => {
                        return <li key={stat.value}>{stat.value + " "}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              )}
              {filteredFriend.review && (
                <div className="single-dog-review">
                  <p className="single-dog-review-title">Review</p>
                  <div className="single-dog-content-box">
                    {filteredFriend.review}
                  </div>
                </div>
              )}
              {filteredFriend.rating && (
                <div className="single-dog-rating">
                  <p className="single-dog-rating-title">Rating</p>
                  <p className="single-dog-rating-content">
                    {createBones(filteredFriend.rating)}
                  </p>
                </div>
              )}
            </div>
            <div className="options-wrapper">
              <div class="single-dog-options">
                <div className="single-dog-starred">
                  <p className="single-dog-starred-content">
                    {handleStarredClick(filteredFriend.isStarred)}
                  </p>
                </div>
                <div className="single-dog-message">
                  <p className="single-dog-message-content">
                    <Link to={`/whistle/${id}`}>
                      <ImBubble className="messaging-bubble" />
                    </Link>
                  </p>
                </div>
                <div className="single-dog-delete">
                  <p className="single-dog-delete-content">
                    <ImBin onClick={() => handleDeleteFriend(filteredFriend)} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="footer">
          <Navigation />
        </footer>
      </div>
    );
  }
  return renderDog();
}
