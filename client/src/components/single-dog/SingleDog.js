import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemsFromLocalStorage } from "../../utils/itemStorage";
import Navigation from "../Navigation";

export default function SingleDog() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const friends = getItemsFromLocalStorage("friends");
    setFriends(friends);
    console.log(friends);
  }, []);

  let { id } = useParams();

  const filteredFriend = friends.filter((dog) => id.includes(dog.name));

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
          <main className="main profile-page">
            <div key={id} className="single-dog-page"></div>
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
