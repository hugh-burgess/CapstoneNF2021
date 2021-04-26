import "./App.css";
import "./components/Navigation.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Friends from "./components/Friends";
import Map from "./components/Map";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <div className="grid-layout-app">
        <header className="header">
          <h1>Header</h1>
        </header>
        <main className="main">
          <Switch>
            <Route path="/friends">
              <Friends />
            </Route>
            <Route path="/map">
              <Map />
            </Route>
            <Route exact path="/">
              <Profile />
            </Route>
            <Route path="*">
              <h2>No match! Go Back 🤓 </h2>
            </Route>
          </Switch>
        </main>
        <footer className="footer">
          <Navigation />
        </footer>
      </div>
    </Router>
  );
}

export default App;
