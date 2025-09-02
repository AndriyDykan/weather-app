import styles from "./Header.module.scss";
import icon from "../../assets/cloud-regular-full.svg";
import Searchbar from "../Searchbar/Searchbar";

function Header() {
  return (
    <>
      <nav className={""}>
        <ul className={styles.navbar}>
          <li>
            <img className={styles.icon} src={icon} alt="Cloud icon" />
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
