import styles from "./Header.module.scss";
import icon from "../assets/cloud-regular-full.svg";
import Searchbar from "../Searchbar/Searchbar";
import React, { useState } from "react";
function Header() {
  

  return (
    <>
      <nav className={styles.navbar}>
        <div>
          <img className={styles.navbar__icon} src={icon} alt="Cloud icon" />
        </div>
        <Searchbar />
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
          <li className={styles.routs}>
            <a className={styles.links} href="">
              registration placeholder
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Header;
