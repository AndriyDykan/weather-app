import styles from "./DisplayCard.module.scss";
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
      <section className={styles.display}>
        {!selectedCity && <p>Please select a city</p>}
        {weather && forcast && (
          <>
            <PresentWeather data={weather[0]} />
            <Chart data={forcast[0]} />
          </>
        )}
      </section>
      <section>{forcast && <Karousel data={forcast}></Karousel>}</section>
    </>
  );
}

export default DisplayCard;
