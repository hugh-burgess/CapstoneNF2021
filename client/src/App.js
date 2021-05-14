import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Friends from "./components/friends-page/Friends";
import Map from "./components/map-page/Map";
import EditProfile from "./components/profile-page/Edit-Profile";
import Profile from "./components/profile-page/Profile";
import Tour from "./components/profile-page/Tour";
import LogIn from "./components/log-in/LogIn";
import Search from "./components/search-page/Search";
import SingleDog from "./components/single-dog/SingleDog";
import Whistle from "./components/single-dog/Whistle";
import SinglePark from "./components/map-page/SinglePark";
import CreateProfile from "./components/create-page/CreateProfile";
import Register from "./components/register/Register";
import FailStatePage from "./FailStatePage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/friends">
            <Friends />
          </Route>
          <Route path="/single-dog/:id">
            <SingleDog />
          </Route>
          <Route path="/whistle/:id">
            <Whistle />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/single-park/:mapID">
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
          <Route path="/create">
            <CreateProfile />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <LogIn />
          </Route>
          <Route path="*">
            <FailStatePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
