
import { useState, useContext } from "react";
import {useCityFetch} from "../hooks/weatherFetch";
import { CityContext } from "../context/CityContext";
import useDebounce from "../hooks/debounce";
function Searchbar() {
  const [search, setSearch] = useState("");
  const debounce = useDebounce(search, 1000);
  const { options, loading, error,clearSeach } = useCityFetch(debounce);
  const { setSelectedCity } = useContext(CityContext);
  

  return (
    <>
      <div className="relative"> 
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Enter city"
          className="border-1 rounded-3xl w-70 h-10 text-center focus:outline-none"
          type="text"
        />
        {loading && (
          <>
            <ul>
              <li>loading</li>
            </ul>
          </>
        )}
        {!loading && options.length > 0 && (
          <ul className="absolute border-1 rounded-3xl p-3 m-1 bg-white z-2">
            {options.map((element, index) => (
              <li
                className="border-b-1 my-4"
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
