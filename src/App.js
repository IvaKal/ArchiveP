import { useEffect, useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import Content from "./components/Content";
import "/node_modules/bpg-nateli/css/bpg-nateli.min.css";
import "/node_modules/bpg-nateli-mtavruli/css/bpg-nateli-mtavruli.min.css";
import { sortData } from "./helpers/sort";

function App() {
  const searchState = useState(null);
  const catState = useState("");
  const subCatState = useState("");
  const subSubCatState = useState("");
  const [data, setData] = useState([]);
  const yearState = useState();
  const departmentState = useState("");
  useEffect(function () {
    fetch("/data.json").then(async function (res) {
      setData((await res.json()).sort(sortData));
    });
  }, []);
  return (
    <div>
      <TopBar searchState={searchState} data={data} catState={catState} />
      <div className="contentContainer">
        <SideBar
          searchState={searchState}
          catState={catState}
          subCatState={subCatState}
          subSubCatState={subSubCatState}
          yearState={yearState}
          departmentState={departmentState}
          data={data}
        />
        <Content
          data={data}
          searchState={searchState}
          catState={catState}
          subCatState={subCatState}
          subSubCatState={subSubCatState}
          yearState={yearState}
          departmentState={departmentState}
        />
      </div>
    </div>
  );
}

export const cats = {
  economics: {
    fiscal: ["taxes", "budget", "loans"],
    monetary: ["bank", "finance", "priceRegulation"],
    branches: ["trade", "agro", "industry", "energy", "utilities"],
    privatization: [],
    international: [],
    general: [],
    crime: [],
  },
  socialPolitics: {
    socialCare: [],
    labor: [],
    healthcare: [],
  },
};

export const catLabels = {
  economics: "ეკონომიკა",
  fiscal: "ფისკალური პოლიტიკა",
  taxes: "გადასახადები",
  budget: "ეროვნული ბიუჯეტი და ხარჯვა",
  loans: "სახელმწიფო სესხები",
  monetary: "მონეტარული პოლიტიკა",
  priceRegulation: "ფასების რეგულირება",
  bank: "ეროვნული ბანკი",
  finance: "საფინანსო სექტორი",
  branches: "დარგობრივი პოლიტიკა",
  trade: "ვაჭრობა",
  agro: "სოფლის მეურნეობა და მიწის პოლიტიკა",
  industry: "მრეწველობა",
  energy: "ენერგეტიკა",
  utilities: "ინფრასტრუქტურა, ტრანსპორტი და მშენებლობა",
  privatization: "პრივატიზაცია და სახელმწიფო საკუთრების რესტრუქტურიზაცია",
  international: "საგარეო ეკონომიკური ურთიერთობები",
  general:"ზოგადი (სექტორთაშორისი) პოლიტიკა; პოლიტიკის დოკუმენტები და ანალიტიკა",
  crime: "ეკონომიკური დანაშაული და კორუფცია",
  socialPolitics: "სოციალური პოლიტიკა",
  healthcare: "ჯანდაცვის პოლიტიკა",
  socialCare: "სოციალური დაცვა",
  labor: "შრომითი ურთიერთობები და დასაქმება",
};

export default App;
