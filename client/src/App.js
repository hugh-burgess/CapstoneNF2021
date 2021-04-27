import "./App.css";
import "./components/Cover.css";
import "./components/Navigation.css";
import "./components/Profile.css";
import "./components/Tour.css";
import "./components/Edit-Profile.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Friends from "./components/Friends";
import Map from "./components/Map";
import EditProfile from "./components/Edit-Profile";
import Profile from "./components/Profile";
import Tour from "./components/Tour";
import Cover from "./components/Cover";

function App() {
  return (
    <Router>
      <div className="grid-layout-app">
        <Switch>
          <Route path="/friends">
            <Friends />
          </Route>
          <Route path="/map">
            <Map />
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
