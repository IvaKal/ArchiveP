import { useState } from "react";
import './index.css'



function TopBar(props) {
    const [cat, setCat] = props.catState;
    const [search, setSearch] = props.searchState;
    return (
      cat && <div className="TopBar">
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


  export default TopBar;