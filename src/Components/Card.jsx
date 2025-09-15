import icon from "../assets/icons/day_icons/01d.svg";
import useWeatherIcon from "../hooks/icons";

function Card({ data }) {
  const icon_src = useWeatherIcon(data?.weather_id ?? null);

  return (
    <article className="flex flex-col justify-center items-center">
      <time className="text-xl sm:text-3xl">{data.time}</time>
      <img className="w-20 sm:w-30" src={icon_src} alt="" />
      <span className="text-xl sm:text-3xl">{Math.round(data.temp)}°</span>
    </article>
  );
}

export default Card;
