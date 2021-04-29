export default function SearchBar() {
  return (
    <div>
      <form className="search-form">
        <input
          type="input"
          name="searchBar"
          className="search-page-bar"
          placeholder="search a fren..."
        />
        <button className="search-go-button" type="submit">
          Go
        </button>
      </form>
    </div>
  );
}
