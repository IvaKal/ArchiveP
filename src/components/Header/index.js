import Search from "../Search";
import "./index.css";
import { catLabels, cats } from "../../App";

function Header(props) {
  const [cat, setCat] = props.catState;
  const [subCat, setSubCat] = props.subCatState;
  const [subSubCat, setSubSubCat] = props.subSubCatState;
  return (
    <div className="Header">
      <div className="HeaderLeft">
        <div className="catContainer">
          {Object.keys(cats).map(function (key) {
            let className = "cat";
            if (key === cat) className = "cat active";
            return (
              <div
                className={className}
                onClick={function () {
                  setSubCat("");
                  setSubSubCat("");
                  if (cat == key) {
                    setCat("");
                  } else {
                    setCat(key);
                  }
                }}
              >
                {catLabels[key]}
              </div>
            );
          })}
        </div>
      </div>
      <div className="HeaderMiddle">
        {!cat && (
          <div className="HeaderSearchContainer">
            <h1>ARCHIVE</h1>
            <Search searchState={props.searchState} />
          </div>
        )}
          {cat &&
          <div className="catContainer"> {
            Object.keys(cats[cat]).map(function (key) {
              let className = "subCat";
              if (key === subCat) className = "subCat active";
              return (
                <div
                  className={className}
                  onClick={function () {
                    setSubSubCat("");
                    if (subCat == key) {
                      setSubCat("");
                    } else {
                      setSubCat(key);
                    }
                  }}
                >
                  {catLabels[key]}
                </div>
              );
            })
          }</div>}
        </div>
      <div className="HeaderRight">
          {subCat &&
          <div className="catContainer"> {
            cats[cat][subCat].map(function (key) {
              let className = "subSubCat";
              if (key === subSubCat) className = "subSubCat active";
              return (
                <div
                  className={className}
                  onClick={function () {
                    if (subSubCat == key) {
                      setSubSubCat("");
                    } else {
                      setSubSubCat(key);
                    }
                  }}
                >
                  {catLabels[key]}
                </div>
              );
            })
            }</div>
            }
        </div>
      </div>
  );
}

export default Header;
