import { useState, useContext } from "react";
import { useCityFetch } from "../hooks/weatherFetch";
import { CityContext } from "../context/CityContext";
import useDebounce from "../hooks/debounce";
function Searchbar() {
  const [search, setSearch] = useState("");
  const debounce = useDebounce(search, 1000);
  const { options, loading, error, clearSeach } = useCityFetch(debounce);
  const { setSelectedCity } = useContext(CityContext);

  return (
    <>
      <div className=" relative flex flex-3 xl:flex-1 justify-center items-center">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Search city"
          className="text-center border rounded-xl w-full text-xl sm:text-2xl"
          type="text"
        />
        {loading && (
          <>
            <ul className="absolute z-[9999] top-full w-full  p-3 border rounded-xl text-xl sm:text-2xl">
              <li>loading</li>
            </ul>
          </>
        )}
        {!loading && options.length > 0 && (
          <ul className="absolute z-[9999] top-full w-full  p-3 border rounded-xl text-xl sm:text-2xl bg-[white]">
            {options.map((element, index) => (
              <li
                className="p-1 hover:bg-gray-300  rounded-sm"
                onClick={() => {
                  setSelectedCity(element);
                  clearSeach();
                  setSearch("");
                }}
                key={index}
              >
                {`${element.name}${
                  element.state ? `, ${element.state}` : ""
                }, ${element.country}`}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Searchbar;
