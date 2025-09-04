
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
      <div className="relative"> 
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Enter city"
          className="bg-grey-200 w-100 h-8 rounded border-0 text-center p-1 shadow-custom outline-none mb-2 mt-2"
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
          <ul className="bg-grey-200 flex flex-col absolute list-none  rounded p-2 text-start shadow-custom border-0 w-full">
            {options.map((element, index) => (
              <li
                className="p-2 cursor-pointer  hover:bg-[rgba(7,3,3,0.31)] hover:rounded-xl active:bg-gray-300 active:[scale:0.98]"
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
