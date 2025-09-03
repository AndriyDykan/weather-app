import styles from "./Card.module.scss";
function Card({ data }) {
 
  return (
   
      <article>
        <header>
          <h2><time>{data.date}</time></h2>
          
        </header>

        <h3>Temperatures</h3>
        <ul className={styles.list}>
          <li>Morning: {data.temps.morn}°C</li>
          <li>Day:{data.temps.day} °C</li>
          <li>Evening: {data.temps.eve}°C</li>
          <li>Night: {data.temps.night}°C</li>
        </ul>

        <h3>Conditions</h3>
        <ul className={styles.list}>
          <li>Humidity:{data.humidity} %</li>
          <li>Pressure:{data.pressure} hPa</li>
          <li>Wind Speed:{data.wind_speed} m/s</li>
        </ul>
      </article>
   
  );
}

export default Card;
