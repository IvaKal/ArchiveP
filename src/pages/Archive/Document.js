import { months } from "../../constants";

function Document(props) {
  return (
    <>
      <div className="Document">
        <h3>{props.data.name}</h3>
        <p><b>წელი:</b> {props.data.year}</p>
        <p><b>თვე:</b> {months[props.data.month-1]}</p>
        <p><b>დღე:</b> {props.data.day}</p>
        <p><b>ფონდის N:</b> {props.data.fundN}</p>
        <p><b>ანაწერის N:</b> {props.data.excerpt}</p>
        <p><b>საქმის N:</b> {props.data.case}</p>
        <p><b>დოკუმენტის ტიპი:</b> {props.data.docType}</p>
        <p><b>ფონდის სახელი:</b> {props.data.fund}</p>
        <p><b>ორგანო/დაწესებულება/ინიცატორი:</b> {props.data.department}</p>
        {props.data.cat && <p><b>სფერო:</b> {props.data.cat}</p>}
        {props.data.subCat && <p><b>ქვე-სფერო:</b> {props.data.subCat}</p>}
        {props.data.subSubCat && <p><b>ქვე-ქვე:</b> {props.data.subSubCat}</p>}
        {props.data.cross && <p><b>მკვეთი ქვე- ან ქვე ქვე სფერო:</b> {props.data.cross}</p>}
        <p><b>დოკუმენტის მდებაროება:</b> {props.data.location}</p>
        {props.data.person && <p><b>პიროვნება:</b> {props.data.person}</p>}
        <p>{props.data.pdf ? <a href={props.data.pdf} target="_blank"><img src="/img/doc-white.svg" height="16"/> ციფრული ვერსია</a> : "ციფრული ვერსია ვერ მოიძებნა" }</p>
      </div>
      <div className="Popup" onClick={props.onClose}></div>
    </>
  );
}

export default Document;
