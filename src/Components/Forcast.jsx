import Karousel from "./Swiper";

import ForcastList from "./ForcastList";
import { CityContext } from "../context/CityContext";
import { useContext } from "react";

function Forcast() {
  const { forcast,hourly } = useContext(CityContext);

  return (
    <>
      {forcast !== null && hourly!==null &&(
        <>
          <section className=" p-5 m-5 w-[40vw]">

            <Karousel data={hourly}></Karousel>

            <ul className="flex flex-col justify-center  gap-4 border-y border-gray h-[50vh]">
              {forcast.map((element, index) => (
                <ForcastList
                  key={index}
                  day={element.day}
                  icon_id={element.weather_id}
                  temp={element.temps.day}
                  feels_like={element.feels_like[1]}
                />
              ))}
            </ul>
          </section>
        </>
      )}
    </>
  );
}
export default Forcast;
