import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getItemsFromLocalStorage } from "../../utils/itemStorage";
import Navigation from "../Navigation";
import "./SingleDog.css";
import { AiFillStar } from "react-icons/ai";
import { ImBubble } from "react-icons/im";
import { ImBin } from "react-icons/im";
import { FaBone } from "react-icons/fa";

export default function SingleDog() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const friends = getItemsFromLocalStorage("friends");
    setFriends(friends);
    console.log(friends);
  }, []);

  let { id } = useParams();

  const filteredFriend = friends.filter((dog, index) =>
    id.includes(index + dog.name)
  );

  function handleStarredClick(friend) {
    return (friend.isStarred = true);
  }

  function renderDog() {
    return filteredFriend.map((friend) => {
      return (
        <div className="grid-layout-app">
          <header className="header">
            <div className="single-dog-wrapper">
              <img
                class="single-dog-image"
                src={friend.imgSrc}
                alt={friend.name}
              />
              <h1 className="cover-title">{friend.name}</h1>
            </div>
          </header>
          <main className="main single-dog-main-wrapper">
            <div key={id} className="single-dog-page">
              <div className="single-dog-overview">
                <div className="single-dog-stats">
                  <p className="single-dog-stats-title">Stats</p>
                  <p className="single-dog-stats-content">{friend.stats}</p>
                  <div className="single-dog-content-box"></div>
                </div>
                <div className="single-dog-review">
                  <p className="single-dog-review-title">Review</p>
                  <p className="single-dog-review-content">{friend.review}</p>
                  <div className="single-dog-content-box"></div>
                </div>
                <div className="single-dog-rating">
                  <p className="single-dog-rating-title">Rating</p>
                  <p className="single-dog-rating-content">
                    <FaBone className="single-dog-starred-bone" />
                    <FaBone className="single-dog-starred-bone" />
                    <FaBone className="single-dog-starred-bone" />
                    <FaBone className="single-dog-starred-bone" />
                    <FaBone className="single-dog-starred-bone" />
                    {friend.rating}
                  </p>
                </div>
              </div>
              <div class="single-dog-options">
                <div className="single-dog-starred">
                  <p className="single-dog-starred-content">
                    <AiFillStar onClick={handleStarredClick} />
                  </p>
                </div>
                <div className="single-dog-message">
                  <p className="single-dog-message-content">
                    <Link to={`/whistle/${id}`}>
                      <ImBubble />
                    </Link>
                  </p>
                </div>
                <div className="single-dog-delete">
                  <p className="single-dog-delete-content">
                    <ImBin />
                  </p>
                </div>
              </div>
            </div>
          </main>
          <footer className="footer">
            <Navigation />
          </footer>
        </div>
      );
    });
  }
  return renderDog();
}
