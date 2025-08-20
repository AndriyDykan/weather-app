import styles from "./Searchbar.module.scss";
import React, { useState, useEffect } from "react";
function Searchbar() {
  const API = "5f0834f7cf4929a7ab21ed2040e25a19";
  const Cityurl = `http://api.openweathermap.org/geo/1.0/direct`;
  const [searchbar, setSearchbar] = useState("");
  const [options, setOptions] = useState(["lviv", "washington", "warshava"]);
  const [loading, setLoading] = useState(false);
  const [debounce, setDebaunce] = useState(searchbar);
  function handleSearch(e) {
    setSearchbar(e.target.value);
  }
  function preparecity(responce){
    const data = responce[0];
    console.log(responce.length);
    
    console.log(data.name);
    console.log(data.country) 

  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebaunce(searchbar);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [searchbar]);

  useEffect(() => {
    const loadCity = async () => {
      setLoading(true);
      const response = await (await fetch(`${Cityurl}?q=${debounce}&limit=5&appid=${API}`)).json();
        preparecity(response);
      const citys = debounce;
      setOptions([citys]);

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

        {options.length > 0 && (
          <ul className={styles.list}>
            {options.map((element, index) => (
              <li onClick={(e) => console.log(index)} key={index}>
                {element}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
export default Searchbar;
