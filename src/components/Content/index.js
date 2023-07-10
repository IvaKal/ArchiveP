import React from "react";
import { catLabels } from "../../App";
import "./index.css";

function Content(props) {
  const [cat] = props.catState;
  const [subCat] = props.subCatState;
  const [subSubCat] = props.subSubCatState;
  const [search] = props.searchState;
  const [year, setYear] = props.yearState;
  const [department, setDepartment] = props.departmentState;
  const data = props.data;
  const years = ["წელი"];
  for (let index = 0; index < data.length; index++) {
    const year = parseInt(data[index].year);
    if (!years.includes(year)) {
      years.push(year);
    }
  }
  const departments = ["უწყება"];
  for (let index = 0; index < data.length; index++) {
    const department = data[index].department;
    if (!departments.includes(department)) {
      departments.push(department);
    }
  }

  return (
    <>
      <div>
        <select
          onChange={function (event) {
            setYear(parseInt(event.target.value));
          }}
        >
          {years.map(function (year) {
            return <option value={year}>{year}</option>;
          })}
        </select>
        <select
          onChange={function (event) {
            if (event.target.value === "უწყება") {
              setDepartment("");
            } else {
              setDepartment(event.target.value);
            }
          }}
        >
          {departments.map(function (department) {
            return <option value={department}>{department}</option>;
          })}
        </select>
      </div>
      <div className="Content">
        {data.map(function (document) {
          if (
            (cat && document.cat !== catLabels[cat]) ||
            (subCat && document.subCat !== catLabels[subCat]) ||
            (subSubCat && document.subSubCat !== catLabels[subSubCat]) ||
            (year && parseInt(document.year) !== year) ||
            (department && document.department !== department)
          )
            return <></>;
          return (
            <div>
              {document.name}
              <div className="documentYear">{document.year}</div>
              <div className="documentDepartment">{document.department}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Content;
