import './index.css'

function Search(props) {
  const [search, setSearch] = props.searchState
  return (
    <div className="search">
      <input
        value={search}
        onChange={function (event) {
          setSearch(event.target.value);
        }}
      />
      <img src="/img/search.svg" />
    </div>
  );
}

export default Search;
