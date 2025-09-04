
import { CityContext } from "../../context/CityContext";
import { useWeatherFetch, useForcastFetch } from "../../hooks/weatherFetch";
import PresentWeather from "../PresentWeather/PresentWeather";
import { useContext } from "react";

import Chart from "../Chart/Chart";

import Karousel from "../Swiper/Swiper";

function DisplayCard() {
  const { selectedCity, setSelectedCity } = useContext(CityContext);
  const { weather } = useWeatherFetch(selectedCity);
  const { forcast } = useForcastFetch(selectedCity);
  return (
    <>
      <section className=" flex gap-5 flex-col flex-1  justify-center items-center gap-4 ">
        <div className="flex h-1/2 w-[70%]  justify-center card gap-5" >
          {!selectedCity && <p className=" text-4xl bg-gray-200 rounded-xl p-4 shadow-custom "> Please select a city</p>}
          {weather && forcast && (
            <>
              <PresentWeather data={weather[0]} />
              <Chart data={forcast[0]} />
            </>
          )}
        </div>
        <div className="card ">{forcast && <Karousel data={forcast}></Karousel>}</div>
      </section>
    </>
  );
}

export default DisplayCard;
