import { Link } from "react-router-dom";
import Search from "../Search";
import "./index.css";

function TopBar(props) {
  return (
    <div className="TopBar">
      <div className="topNav">
        <Link to="/">მთავარი</Link>
        <Link to="/archive">არქივი</Link>
        <Link to="/thesaurus">თეზაურუსი</Link>
        <Link to="/about">ჩვენ შესახებ</Link>
      </div>
      <Search searchState={props.searchState} data={props.data} />
    </div>
  );
}

export default TopBar;
