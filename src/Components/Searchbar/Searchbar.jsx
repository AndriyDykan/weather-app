import styles from "./Searchbar.module.scss";
import { useState, useContext } from "react";
import {useCityFetch} from "../../hooks/weatherFetch";
import { CityContext } from "../../context/CityContext";
import useDebounce from "../../hooks/debounce";
function Searchbar() {
  const [search, setSearch] = useState("");
  const debounce = useDebounce(search, 1000);
  const { options, loading, error,clearSeach } = useCityFetch(debounce);
  const { setSelectedCity } = useContext(CityContext);

  return (
    <>
      <div className={styles.wrapper}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Enter city"
          className={styles.searchbar}
          type="text"
        />
        {loading && (
          <>
            <ul className={styles.list}>
              <li>loading</li>
            </ul>
          </>
        )}
        {!loading && options.length > 0 && (
          <ul className={styles.list}>
            {options.map((element, index) => (
              <li
                className={styles.list_element}
                onClick={() => {
                  setSelectedCity(element);
                  clearSeach();
                  setSearch("");
                }}
                key={index}
              >
                {`${element.name}, ${element.state || ""}, ${element.country}`}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Searchbar;
