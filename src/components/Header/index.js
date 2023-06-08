import Search from "../Search";
import "./index.css";

function Header() {
  return (
    <div className="header">
      <div></div>
      <div className="middle">
        <h1>ARCHIVE</h1>
        <Search />
      </div>
      <div></div>
    </div>
  );
}

export default Header;
