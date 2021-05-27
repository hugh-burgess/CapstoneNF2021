import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Friends from "./components/friends-page/Friends";
import Map from "./components/map-page/Map";
import EditProfile from "./components/profile-page/EditProfile";
import Profile from "./components/profile-page/Profile";
import LogIn from "./components/log-in/LogIn";
import Search from "./components/search-page/Search";
import SingleDog from "./components/single-dog/SingleDog";
import Whistle from "./components/single-dog/Whistle";
import SinglePark from "./components/map-page/SinglePark";
import CreateProfile from "./components/create-page/CreateProfile";
import Register from "./components/register/Register";
import FailStatePage from "./FailStatePage";
import Navigation from "./components/navigation/Navigation";

function App() {
  // example of path without 4000 working
  //   const [state, setState] = useState("");

  // //   useEffect(() => {
  // //     fetch("/api/hello-world")
  // //       .then((res) => res.json())
  // //       .then((data) => setState(data));
  // //   });

  // //   return (
  // //     <div className="App">
  // //       <h1> {state} </h1>
  // //     </div>
  // //   );
  // // }

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
          <Route path="/not-found">
            <FailStatePage />
          </Route>
          <Route path="*">
            <Redirect to="/not-found" />
          </Route>
        </Switch>
        <Switch>
          <Route
            path={[
              "/not-found",
              "/search",
              "/edit-profile",
              "/profile",
              "/friends",
              "/single-dog/:id",
              "/whistle/:id",
              "/map",
              "/single-park/:mapID",
            ]}
          >
            <footer className="footer">
              <Navigation />
            </footer>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// <Route path={["/users/:id", "/profile/:id"]}>
