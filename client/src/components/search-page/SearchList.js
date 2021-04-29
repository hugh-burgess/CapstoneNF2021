export default function SearchList() {
  return (
    <div>
      <form className="search-form">
        <input
          type="input"
          name="searchBar"
          className="search-page-bar"
          placeholder="search a fren..."
        />
        <button type="submit">Go</button>
      </form>
      <section>
        <h2>Name</h2>
        <img src="#" alt="dog" />
      </section>
    </div>
  );
}
