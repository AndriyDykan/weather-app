import styles from "./Header.module.scss";
import icon from "../assets/cloud-regular-full.svg";

function Header() {
  return (
    <>
      <nav className={styles.navbar}>
        <div>
          <img className={styles.navbar__icon} src={icon} alt="Cloud icon" />
        </div>
        <input placeholder="Enter city" className={styles.search} type="text" />
        <ul className={styles.navigations}>
          <li className={styles.routs}>
            <a className={styles.links} href="">
              Weather
            </a>
          </li>
          <li className={styles.routs}>
            <a className={styles.links} href="">
              History
            </a>
          </li>
          <li  className={styles.routs}>
            <a className={styles.links} href="">registration placeholder</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Header;
