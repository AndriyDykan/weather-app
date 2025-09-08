import { CityContext } from "../context/CityContext";

import PresentWeather from "./PresentWeather";
import { useContext } from "react";

import Forcast from "./Forcast";

import Karousel from "./Swiper";

function DisplayCard() {
  const { selectedCity, setSelectedCity } = useContext(CityContext);

  return (
    <>
      {!selectedCity ? (
        <span className="flex flex-1 justify-center items-center">There is no selected city</span>
      ) : (
        <section className=" grid grid-cols-2 flex-1 justify-center items-center ">
          <>
            <PresentWeather />
            <Forcast />
          </>
        </section>
      )}
    </>
  );
}

export default DisplayCard;
