import React, { useState } from "react";
import { catLabels, cats } from "../../App";

function CatSelector() {
  const [cat, setCat] = useState("");
  const [subCat, setSubCat] = useState("");
  const [subSubCat, setSubSubCat] = useState("");
  return (
    <div>
      <div>
        {Object.keys(cats).map(function (key) {
          return (
            <div
              onClick={function () {
                setCat(key);
                setSubCat("");
                setSubSubCat("");
              }}
            >
              {catLabels[key]}
            </div>
          );
        })}
      </div>
      <div>
        {cat &&
          Object.keys(cats[cat]).map(function (key) {
            return (
              <div
                onClick={function () {
                  setSubCat(key);
                  setSubSubCat("");
                }}
              >
                {catLabels[key]}
              </div>
            );
          })}
      </div>
      <div>
        {subCat &&
          cats[cat][subCat].map(function (key) {
            return (
              <div
                onClick={function () {
                    setSubSubCat(key);
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

export default CatSelector;
