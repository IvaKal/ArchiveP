import Search from "../Search";
import "./index.css";

function TopBar(props) {
  return (
    <div className="TopBar">
      <Search searchState={props.searchState} data={props.data} />
    </div>
  );
}

export default TopBar;
