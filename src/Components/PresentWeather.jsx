import icon from "../assets/icons/not-available.svg";
import barometer from "../assets/icons/barometer.svg";
import eye from "../assets/icons/eye.svg";
import hum from "../assets/icons/humidity.svg";
import wind from "../assets/icons/wind.svg";

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
        <div className="flex flex-col w-full gap-5 ">
          <section className="flex justify-between w-full">
            <div className="flex justify-center items-left flex-col">
              <h2 className="text-xl sm:text-4xl">{Math.round(weather.temp)}°</h2>
              <strong className="text-xl sm:text-5xl">{weather.name}</strong>
              <time className="text-xl sm:text-4xl">
                {weather.day} {weather.time}
              </time>
            </div>
            <div className="flex justify-center items-center">
              <img className="w-30 sm:w-50" src={icon_src} alt="Weather icon" />
            </div>
          </section>

          <section className="flex flex-col gap-10 w-full">
            <div className="w-full text-xl  h-[200px] sm:h-[300px]">
              <Chart data={forcast[0]} />
            </div>

            <ul className="flex justify-center items-center gap-4">
              <li className="flex gap-2 justify-center items-center">
                <img src={wind} alt="Wind icon" className="w-10 h-10 sm:w-20 sm:h-20" />
                <span className="sm:text-xl">{weather.wind_speed} m/s</span>
              </li>
              <li className="flex gap-2 justify-center items-center">
                <img src={hum} alt="Humidity icon" className="w-10 h-10 sm:w-20 sm:h-20" />
                <span className="sm:text-xl">{weather.humidity} %</span>
              </li>
              <li className="flex gap-2 justify-center items-center">
                <img
                  src={barometer}
                  alt="Pressure icon"
                  className="w-10 h-10 sm:w-20 sm:h-20"
                />
                <span className="sm:text-xl">{weather.pressure} hPa</span>
              </li>
              <li className="flex gap-2 justify-center items-center">
                <img src={eye} alt="Visibility icon" className="w-10 h-10 sm:w-20 sm:h-20" />
                <span className="sm:text-xl">{weather.visibility} km</span>
              </li>
            </ul>
          </section>
        </div>
      )}
    </>
  );
}

export default PresentWeather;
