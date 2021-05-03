import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Friends from "./components/friends-page/Friends";
import Map from "./components/map-page/Map";
import EditProfile from "./components/profile-page/Edit-Profile";
import Profile from "./components/profile-page/Profile";
import Tour from "./components/profile-page/Tour";
import Cover from "./components/Cover";
import Search from "./components/search-page/Search";
import SinglePark from "./components/map-page/SinglePark";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/friends">
            <Friends />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/map/:mapID">
            <SinglePark />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route path="/tour">
            <Tour />
          </Route>
          <Route path="/edit-profile">
            <EditProfile />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route exact path="/">
            <Cover />
          </Route>
          <Route path="*">
            <h2>No match! Go Back 🤓 </h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
