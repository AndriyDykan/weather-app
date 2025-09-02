import styles from "./DisplayCard.module.scss";
import { CityContext } from "../../context/CityContext";
import { useWeatherFetch, useForcastFetch } from "../../hooks/weatherFetch";
import PresentWeather from "../PresentWeather/PresentWeather";
import { useContext } from "react";
import Card from "../WeatherCard/Card";
import Chart from "../Chart/Chart";
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
            <Chart data = {forcast[0]}/>
          </>
        )}
      </section>
      <section>
        <Card></Card>
        <Card></Card>
        <Card></Card>

      </section>
    </>
  );
}

export default DisplayCard;
