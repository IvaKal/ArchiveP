import Search from "../Search";
import "./index.css";
import Asearch from "../Asearch";

function Header() {
  return (
    <div className="header">
      <div className="middle">
        <h1>ARCHIVE</h1>
        <Search />
        <Asearch options={['option1', 'option2', 'option3', 'option4', 'jaba']} />
      </div>
    </div>
  );
}

export default Header;
