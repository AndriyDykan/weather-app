import Karousel from "./Swiper";

import ForcastList from "./ForcastList";
import { CityContext } from "../context/CityContext";
import { useContext } from "react";

function Forcast() {
  const { forcast } = useContext(CityContext);
  return (
    <>
      {forcast !== null && (
        <>
          <section>
            <Karousel data={forcast}></Karousel>

            <ul className="border-y border-gray p-5 m-5 w-[40vw]">
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
