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
        {Object.keys(cats).map(function (key) {
          let className = 'cat';
          if (key === cat) className = 'cat active'
          return (
            <div
              onClick={function () {
                setSubCat("");
                setSubSubCat("");
                if (cat == key) {
                  setCat("");
                } else {
                  setCat(key);
                }
              }}
              className={className}
            >
              {catLabels[key]}
            </div>
          );
        })}
      </div>
      <div className="HeaderMiddle">
        {!cat && (
          <>
            <h1>ARCHIVE</h1>
            <Search searchState={props.searchState} />
          </>
        )}
        <div>
          {cat &&
            Object.keys(cats[cat]).map(function (key) {
              return (
                <div
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
            })}
        </div>
      </div>
      <div className="HeaderRight">
        {subCat &&
          cats[cat][subCat].map(function (key) {
            return (
              <div
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
          })}
      </div>
    </div>
  );
}

export default Header;
