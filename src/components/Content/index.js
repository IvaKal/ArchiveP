import React, { useState } from "react";
import { catLabels } from "../../App";
import "./index.css";
import Document from "./Document";

function Content(props) {
  const [cat] = props.catState;
  const [subCat] = props.subCatState;
  const [subSubCat] = props.subSubCatState;
  const [search] = props.searchState;
  const [year, setYear] = props.yearState;
  const [department, setDepartment] = props.departmentState;
  const data = props.data;
  const [selected, setSelected] = useState(null);
  let results = data;
  if (search !== null) {
    results = search;
  }
  return (
    <>
      {selected !== null && (
        <Document
          data={data[selected]}
          onClose={function () {
            setSelected(null);
          }}
        />
      )}
      <div className="Content">
        {results.map(function (result, index) {
          let document = result;
          let nameIndices = result.matches?.find(function (match) {
            return match.key === "name";
          })?.indices;

          if (document.item) {
            document = document.item;
          }
          if (
            (cat && document.cat !== catLabels[cat]) ||
            (subCat && document.subCat !== catLabels[subCat]) ||
            (subSubCat && document.subSubCat !== catLabels[subSubCat]) ||
            (year && parseInt(document.year) !== year) ||
            (department && document.department !== department)
          )
            return <></>;
          return (
            // [ [0, 5], [7, 10] ]
            <div
              onClick={function () {
                setSelected(index);
              }}
            >
              {document.name.split("").map(function (char, i) {
                if (
                  nameIndices &&
                  nameIndices.find(function (range) {
                    return i >= range[0] && i <= range[1];
                  })
                ) {
                  return <b>{char}</b>;
                }
                return char;
              })}
              <div className="documentYear">
                {document.year} · {document.department}{" "}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Content;
