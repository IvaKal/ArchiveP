import React from "react";
import { catLabels } from "../../App";
import "./index.css";

function Content(props) {
  const [cat] = props.catState;
  const [subCat] = props.subCatState;
  const [subSubCat] = props.subSubCatState;
  const [search] = props.searchState;
  const data = props.data;

  return (
    <div className="Content">
      {data.map(function (document) {
        if (
          (cat && document.cat !== catLabels[cat]) ||
          (subCat && document.subCat !== catLabels[subCat]) ||
          (subSubCat && document.subSubCat !== catLabels[subSubCat])
        )
          return <></>;
        return <div>{document.name}<div className="documentYear">{document.year}</div></div>;
      })}
    </div>
  );
}

export default Content;
