import styles from "./Searchbar.module.scss";
import React, { useState, useEffect ,useContext} from "react";
import { CityContext } from "../CityContext";
function Searchbar() {
  const API = "5f0834f7cf4929a7ab21ed2040e25a19";
  const Cityurl = `http://api.openweathermap.org/geo/1.0/direct`;
  const [searchbar, setSearchbar] = useState("");
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [debounce, setDebaunce] = useState(searchbar);
  const {setSelectedCity} = useContext(CityContext);
  function handleSearch(e) {
    setSearchbar(e.target.value);
  }
  function preparecity(responce) {
    const city = responce.map((element) => ({
      name: element.name,
      state: element.state,
      country: element.country,
      lat: element.lat,
      lon: element.lon,
    }));
    return city;
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebaunce(searchbar);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [searchbar]);

  useEffect(() => {
    if (!debounce) {
      setOptions([]);
      return;
    }

    const loadCity = async () => {
      setLoading(true);
      const response = await (
        await fetch(`${Cityurl}?q=${debounce}&limit=5&appid=${API}`)
      ).json();
      const citys = preparecity(response);
      setOptions(citys);

      setLoading(false);
    };
    if (debounce) loadCity();
  }, [debounce]);

  return (
    <>
      <div className={styles.wrapper}>
        <input
          onChange={(e) => handleSearch(e)}
          value={searchbar}
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
                onClick={(e) => setSelectedCity(e)}
                key={index}
              >
                {`${element.name}, ${element.state}, ${element.country}`}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Searchbar;
