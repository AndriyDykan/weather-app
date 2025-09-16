import icon from "../assets/sun.png";
import Searchbar from "./Searchbar";

function Header() {
  return (
    <nav className="flex justify-between gap-5  ">
      <div className="flex flex-1 xl:flex-4 items-center justify-start gap-4">
        <img className="w-15 sm:w-25 " src={icon} alt="cloud icon" />
        <h1 className="hidden xl:inline xl:text-xl">Weather</h1>
      </div>
      <Searchbar />
    </nav>
  );
}
export default Header;
