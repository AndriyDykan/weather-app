import icon from "../assets/sun.png";
import Searchbar from "./Searchbar";

function Header() {
  return (
    <nav className="flex justify-between gap-5  ">
      <div className="flex-1 items-center justify-center">
        <img className="w-15 sm:w-25 " src={icon} alt="cloud icon" />
        <h1 className="hidden">Weather</h1>
      </div>
      <Searchbar />
    </nav>
  );
}
export default Header;
