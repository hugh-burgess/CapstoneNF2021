import { useLocation, useParams } from "react-router-dom";
import { getSingleDogFromLocalStorage } from "../../utils/itemStorage";
import Navigation from "../navigation/Navigation";
import "./SingleDog.css";
import DogOptions from "./DogOptions";
import { FaBone } from "react-icons/fa";
import RandomNumber from "../../utils/RandomNumber";
import FakeFrens from "../../utils/FakeFrens";
import { GiSittingDog } from "react-icons/gi";

export default function SingleDog() {
  let location = useLocation();

  let number = RandomNumber;
  let { id } = useParams();

  const filteredFriend = getSingleDogFromLocalStorage(
    Number(location.pathname.slice(12))
  );

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
            {filteredFriend && (
              <div className="single-dog-overview">
                {filteredFriend.stats[0].value !== null && (
                  <div className="single-dog-stats">
                    <p className="single-dog-stats-title">Stats</p>
                    <div className="single-dog-content-box">
                      <ul>
                        {filteredFriend.stats.map((stat) => {
                          if (stat.value !== null) {
                            return <li key={stat.value}>{stat.value + " "}</li>;
                          }
                          return stat.value;
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
            )}
            {filteredFriend.stats[0].value === null &&
              filteredFriend.review === "" &&
              filteredFriend.rating === "" && (
                <div>
                  <div className="render-div">
                    <p className="no-mates-message">
                      {filteredFriend.name} doesn't have anything to show!
                      <br /> <GiSittingDog />
                    </p>
                  </div>
                </div>
              )}
            {filteredFriend && <DogOptions id={id} />}
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
