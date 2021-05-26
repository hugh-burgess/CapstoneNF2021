import Navigation from "../navigation/Navigation";
import "./Search.css";
import "../profile-page/Profile.css";
import SearchBar from "./SearchBar";
import { useState } from "react";
import Header from "../header/Header";
import SlideUpTransition from "../animations/SlideUpTransition";

export default function Search() {
  const [filter, setFilter] = useState("");

  function handleNameFilter(value) {
    setFilter(value);
  }
  return (
    <div className="grid-layout-app">
      <div className="search-header-wrapper">
        <Header title="search" />
      </div>
      <main className="main search-page">
        <SearchBar handleNameFilter={handleNameFilter} />
        <SlideUpTransition filter={filter} />
      </main>
      <footer className="footer">
        <Navigation />
      </footer>
    </div>
  );
}
