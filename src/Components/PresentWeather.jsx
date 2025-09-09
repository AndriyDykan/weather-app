import icon from "../assets/icons/not-available.svg"
import barometer from "../assets/icons/barometer.svg"
import eye from "../assets/icons/eye.svg"
import hum from "../assets/icons/humidity.svg"
import wind from  "../assets/icons/wind.svg"


import { CityContext } from "../context/CityContext";
import { useContext } from "react";

import Chart from "./Chart";
import useWeatherIcon from "../hooks/icons";

function PresentWeather() {
  
  const { weather, forcast } = useContext(CityContext);
 
  const icon_src = useWeatherIcon(weather?.weather_id ?? null);
  return (
    <>
      {weather !== null && forcast !== null && (
      
        <div className="flex flex-col items-center gap-10 p-5 ">

          <section className="pb-4 flex flex-col md:flex-row items-center w-[40vw] max-w-4xl  border-b-1 border-grey-100">
            <div className="flex flex-col text-start mr-auto ">
              <h2 className="text-9xl font-bold">
                {Math.round(weather.temp)}°
              </h2>
              <strong className="text-4xl">{weather.name}</strong>
              <time className="text-2xl">
                {weather.day} {weather.time}
              </time>
            </div>
       
            <img
              className="h-auto w-40 ml-auto"
              src={icon_src}
              alt="Weather icon"
            />
          </section>

          <section className="w-[40vw] max-w-4xl h-80 ">
            <Chart data={forcast[0]} />
          </section>

          <ul className="flex justify-around border p-4 rounded-2xl w-[40vw] max-w-4xl">
            <li className="flex  items-center gap-2">
              <img src={wind} alt="Wind icon" className="w-6 h-6" />
              <span>{weather.wind_speed} m/s</span>
            </li>
            <li className="flex  items-center gap-2">
              <img src={hum} alt="Humidity icon" className="w-6 h-6" />
              <span>{weather.humidity} %</span>
            </li>
            <li className="flex  items-center gap-2">
              <img src={barometer} alt="Pressure icon" className="w-6 h-6" />
              <span>{weather.pressure} hPa</span>
            </li>
            <li className="flex  items-center gap-2">
              <img src={eye} alt="Visibility icon" className="w-6 h-6" />
              <span>{weather.visibility} km</span>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default PresentWeather;
