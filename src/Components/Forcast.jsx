import Karousel from "./Swiper";

import ForcastList from "./ForcastList";
import { CityContext } from "../context/CityContext";
import { useContext } from "react";

function Forcast() {
  const { forcast, hourly } = useContext(CityContext);

  return (
    <>
      {forcast !== null && hourly !== null && (
        <>
          <section className="flex flex-col gap-10">
            <div>
              <Karousel data={hourly} />
            </div>

            <ul className="flex flex-col">
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
