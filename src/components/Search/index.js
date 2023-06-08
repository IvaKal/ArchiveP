import { useState } from "react";
import './index.css'


function Search() {
  const [value, setValue] = useState("");
  return (
    <div className="search">
      <input
        value={value}
        onChange={function (event) {
          setValue(event.target.value);
        }}
      />
    </div>
  );
}

export default Search;
