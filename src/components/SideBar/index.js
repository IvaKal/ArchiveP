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
  const sums = {};
  const [search] = props.searchState;
  for (let index = 0; index < data.length; index++) {
    const document = data[index];
    const year = parseInt(document.year);
    if (!years.includes(year)) {
      years.push(year);
    }
    if (sums[document.cat]) {
      sums[document.cat]++;
    } else {
      sums[document.cat] = 1;
    }
    if (sums[document.subCat]) {
      sums[document.subCat]++;
    } else {
      sums[document.subCat] = 1;
    }
    if (sums[document.subSubCat]) {
      sums[document.subSubCat]++;
    } else {
      sums[document.subSubCat] = 1;
    }
  }
  const departments = [
    "საქართველოს სახელმწიფო მეთაური",
    "საქართველოს პარლამენტი",
    "საქართველოს მინისტრთა საბჭო",
  ];
  const results = search === null ? data : search;
  let sum = 0;
  for (let index = 0; index < results.length; index++) {
    let document = results[index];
    if (document.item) {
      document = document.item;
    }
    if (
      (cat && document.cat !== catLabels[cat]) ||
      (subCat && document.subCat !== catLabels[subCat]) ||
      (subSubCat && document.subSubCat !== catLabels[subSubCat]) ||
      (year && parseInt(document.year) !== year) ||
      (department && document.department !== department)
    ) {
      continue;
    }
    sum++;
  }
  return (
    <div className="sideBarContainer">
      <div className="sideBar">
        <h3>საძიებო სისტემა</h3>
        <div className="sideBarScroll">
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
                      <div>{sums[catLabels[catKey]]}</div>
                    </div>
                    <div className="subCatContainer">
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
                                <div>{sums[catLabels[subCatKey]]}</div>
                              </div>
                              <div className="subSubCatContainer">
                                {subCatKey === subCat &&
                                  cats[cat][subCat].map(function (
                                    subSubCatKey
                                  ) {
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
                                        <div>
                                          {sums[catLabels[subSubCatKey]]}
                                        </div>
                                      </div>
                                    );
                                  })}
                              </div>
                            </>
                          );
                        })}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className="sum">ნაჩვენებია {sum}/{data.length} დოკუმენტი ({Math.round(sum/data.length*100)}%)  </div>
      </div>
    </div>
  );
}

export default SideBar;
