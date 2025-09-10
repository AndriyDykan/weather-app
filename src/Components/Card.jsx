import icon from "../assets/icons/day_icons/01d.svg";
import useWeatherIcon from "../hooks/icons";

function Card({ data }) {
  const icon_src = useWeatherIcon(data?.weather_id ?? null);
  
  return (
    <article className="w-[7rem] h-[10rem] gap-4 flex flex-col justify-center items-center ">
      <time className="text-xl">{data.time}</time>
      <img className=" w-10 h-10 " src={icon_src} alt="" />
      <span className="text-3xl">{Math.round(data.temp)}°</span>
    </article>
  );
}

export default Card;
