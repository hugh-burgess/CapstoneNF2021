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

  function renderDog() {
    return friends.map((friend, index) => {
      if (id === index + friend.name) {
        return (
          <div className="grid-layout-app">
            <header className="header">
              <h1 className="cover-title">{friend.name}</h1>
            </header>
            <main className="main profile-page">
              <div key={id} className="single-dog-page">
                Hello {id}
              </div>
            </main>
            <footer className="footer">
              <Navigation />
            </footer>
          </div>
        );
      }
    });
  }
  return renderDog();
}
