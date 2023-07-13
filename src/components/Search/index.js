import { useEffect, useRef } from "react";
import "./index.css";
import Fuse from "fuse.js";

function Search(props) {
  const fuseRef = useRef();

  useEffect(
    function () {
      if (props.data.length > 0) {
        fuseRef.current = new Fuse(props.data, {
          keys: [
            "name",
            "year",
            // "fundN",
            // "excerpt",
            // "case",
            "documentType",
            "fund",
            "department",
            "cat",
            "subCat",
            "subSubCat",
            "location",
            "person",
          ],
          includeMatches: true,
          findAllMatches: true,
          threshold: 0.3,
        });
      }
    },
    [props.data]
  );
  const [search, setSearch] = props.searchState;
  return (
    <div className="search">
      <input
        onChange={function (event) {
          if (event.target.value === "") {
            setSearch(null);
          } else {
            setSearch(fuseRef.current.search(event.target.value));
          }
        }}
      />
      <img src="/img/search.svg" />
    </div>
  );
}

export default Search;
