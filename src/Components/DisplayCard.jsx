import { CityContext } from "../context/CityContext";

import PresentWeather from "./PresentWeather";
import { useContext } from "react";

import Forcast from "./Forcast";

function DisplayCard() {
  const { selectedCity } = useContext(CityContext);

  return (
    <>
      {!selectedCity ? (
        <span className=" flex flex-1 justify-center items-center ">
          There is no selected city
        </span>
      ) : (
        <section className=" grid grid-cols-1 xl:grid-cols-2 gap-10 flex-1 w-full items-center">
          <PresentWeather />
          <Forcast/>
         
        </section>
      )}
    </>
  );
}

export default DisplayCard;
