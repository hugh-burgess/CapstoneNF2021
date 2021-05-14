export default function SearchBar({ handleNameFilter }) {
  function handleSubmit(event) {
    event.preventDefault();
    const value = event.target.value;
    handleNameFilter(value);
  }

  return (
    <div>
      <form className="search-form">
        <input
          onChange={handleSubmit}
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
