import styles from "./PresentWeather.module.scss";

function PresentWeather({ data }) {
  return (
    <>
      <section>
        <header>
          <time>
            {data.date}{" "}
            {new Date().toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </time>
          <h2>{data.name}</h2>
        </header>
        <div>
          <p>
            Temperature: <span>{data.temp}°C</span>
          </p>
          <p>
            Feels like: <span>{data.feels_like}°C</span>
          </p>
        </div>
        <ul>
          
          <li>
            <strong>Wind:</strong> {data.wind_speed} m/s 
          </li>
          <li>
            <strong>Pressure:</strong> {data.pressure} hPa
          </li>
          <li>
            <strong>Humidity:</strong> {data.humidity} %
          </li>
          <li>
            <strong>Visibility:</strong> {data.visibility} km
          </li>
        </ul>
      </section>
    </>
  );
}

export default PresentWeather;
