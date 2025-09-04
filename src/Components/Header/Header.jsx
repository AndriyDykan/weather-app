
import icon from "../../assets/cloud-regular-full.svg";
import Searchbar from "../Searchbar/Searchbar";

function Header() {
  return (
    <>
      <nav className="my-5">
        <ul className="flex justify-around items-center h-20 mt-4 px-20 list-none ">
          <li>
            <img className="m-4 w-12 h-auto" src={icon} alt="Cloud icon" />
          </li>
          <li>
            <Searchbar />
          </li>
          <li>Weather</li>
        </ul>
      </nav>
    </>
  );
}
export default Header;
