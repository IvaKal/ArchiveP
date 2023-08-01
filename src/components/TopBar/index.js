import { Link, useLocation } from "react-router-dom";
import Search from "../Search";
import "./index.css";

function TopBar(props) {
  const { pathname } = useLocation();

  return (
    <div className="TopBar">
      <div className="topBarContainer">
        <div className="topNav">
          <Link className="logo">GEO CHRONICS</Link>
          <Link className={pathname === "/" ? "active" : ""} to="/">
            თემატური ძიება
          </Link>
          <Link
            className={pathname === "/thesaurus" ? "active" : ""}
            to="/thesaurus"
          >
            თეზაურუსი
          </Link>
          <Link className={pathname === "/about" ? "active" : ""} to="/about">
            საიტის შესახებ
          </Link>
        </div>
        <Search searchState={props.searchState} data={props.data} />
        <div className="rBll"></div>
      </div>
    </div>
  );
}

export default TopBar;
