import "./index.css";
import { catLabels, cats } from "../../App";
import Dropdown from "../Dropdown";

function SideBar(props) {
  const [cat, setCat] = props.catState;
  const [subCat, setSubCat] = props.subCatState;
  const [subSubCat, setSubSubCat] = props.subSubCatState;
  const [year, setYear] = props.yearState;
  const [department, setDepartment] = props.departmentState;
  const data = props.data;
  const years = [];
  for (let index = 0; index < data.length; index++) {
    const year = parseInt(data[index].year);
    if (!years.includes(year)) {
      years.push(year);
    }
  }
  const departments = [
    "საქართველოს სახელმწიფო მეთაური",
    "საქართველოს პარლამენტი",
    "საქართველოს მინისტრთა საბჭო",
  ];
  // for (let index = 0; index < data.length; index++) {
  //   const department = data[index].department;
  //   if (!departments.includes(department)) {
  //     departments.push(department);
  //   }
  // }
  return (
    <div className="sideBarContainer">
      <div className="sideBar">
        <div className="dropdownContainer">
          <Dropdown
            options={departments}
            value={department}
            onChange={setDepartment}
            placeholder="ყველა უწყება"
          />
          <Dropdown
            options={years}
            value={year}
            onChange={setYear}
            placeholder="ყველა წელი"
          />
        </div>
        <div className="nav">
          <div className="catContainer">
            {Object.keys(cats).map(function (catKey) {
              let className = "cat";
              if (catKey === cat) className = "cat active";
              return (
                <>
                  <div
                    className={className}
                    onClick={function () {
                      setSubCat("");
                      setSubSubCat("");
                      if (cat == catKey) {
                        setCat("");
                      } else {
                        setCat(catKey);
                      }
                    }}
                  >
                    {catLabels[catKey]}
                  </div>
                  {catKey === cat &&
                    Object.keys(cats[cat]).map(function (subCatKey) {
                      let className = "subCat";
                      if (subCatKey === subCat) className = "subCat active";
                      return (
                        <>
                          <div
                            className={className}
                            onClick={function () {
                              setSubSubCat("");
                              if (subCat == subCatKey) {
                                setSubCat("");
                              } else {
                                setSubCat(subCatKey);
                              }
                            }}
                          >
                            {catLabels[subCatKey]}
                          </div>
                          {subCatKey === subCat &&
                            cats[cat][subCat].map(function (subSubCatKey) {
                              let className = "subSubCat";
                              if (subSubCatKey === subSubCat)
                                className = "subSubCat active";
                              return (
                                <div
                                  className={className}
                                  onClick={function () {
                                    if (subSubCat == subSubCatKey) {
                                      setSubSubCat("");
                                    } else {
                                      setSubSubCat(subSubCatKey);
                                    }
                                  }}
                                >
                                  {catLabels[subSubCatKey]}
                                </div>
                              );
                            })}
                        </>
                      );
                    })}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
