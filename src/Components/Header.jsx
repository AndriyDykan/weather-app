import icon from "../assets/sun.png";
import Searchbar from "./Searchbar";

function Header() {
  return (
    <nav className="flex justify-between items-center mx-5  border-b-1 border-grey-100">
      <div className="inline-flex items-center  space-x-5">
        <img className="h-auto w-15" src={icon} alt="cloud icon" />
        <h1 className="text-xl font-light">Weather</h1>
      </div>
      <Searchbar />
    </nav>
  );
}
export default Header;
