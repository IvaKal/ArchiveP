import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CatSelector from "./components/CatSelector";

function App() {
  const [data, setData] = useState("");
  useEffect(function () {
    fetch("/data.json").then(async function (res) {
      setData(JSON.parse(await res.text()));
    });
  }, []);
  return (
    <div>
      <Header data={data} />
      <CatSelector data={data} />
    </div>
  );
}

export const cats = {
  economics: {
    fiscal: ["taxes", "budget", "loans"],
    monetary: ["bank", "finance"],
    branches: ["trade", "agro", "industry", "energy", "utilities"],
    privatization: [],
    international: [],
    general: [],
    crime: [],
  },
  socialPolitics: {
    healthcare: []
  }
};

export const catLabels = {
  economics: "ეკონომიკა",
  fiscal: "ფისკალური პოლიტიკა",
  taxes: "გადასახადები",
  budget: "ეროვნული ბიუჯეტი და ხარჯვა",
  loans: "სახელმწიფო სესხები",
  monetary: "მონეტარული პოლიტიკა",
  bank: "ეროვნული ბანკი",
  finance: "საფინანსო სექტორი",
  branches: "დარგობრივი პოლიტიკა",
  trade: "საერთაშორისო ვაჭრობა",
  agro: "სოფლის მეურნეობა და მიწის პოლიტიკა",
  industry: "მრეწველობა",
  energy: "ენერგეტიკა",
  utilities: "ინფრასტრუქტურა, ტრანსპორტი და მშენებლობა",
  privatization: "პრივატიზაცია და რესტრუქტურიზაცია",
  international: "საგარეო ეკონომიკური ურთიერთობები",
  general: "ზოგადი (სექტორთაშორისი) პოლიტიკა; პოლიტიკის დოკუმენტები და ანალიტიკა",
  crime: "ეკონომიკური დანაშაული და კორუფცია",
  socialPolitics: "სოციალური პოლიტიკა",
  healthcare: "ჯანდაცვა"
}


export default App;
