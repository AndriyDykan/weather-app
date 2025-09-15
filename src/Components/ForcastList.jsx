import useWeatherIcon from "../hooks/icons";
function ForcastList({ day=0, icon_id=null, temp=0, feels_like=0 }) {
  const icon_src = useWeatherIcon(icon_id);
  return (
    <>
      <li className="grid grid-cols-3 justify-center items-center text-xl sm:text-3xl">
        <time>{day}</time>
        <div className="">
          <img className="w-20 sm:w-30" src={icon_src} alt="" />
        </div>
        <div className="flex justify-between items-center gap-2">
          <span>{Math.round(temp)}°</span>
          <span>{Math.round(feels_like)}°</span>
        </div>
      </li>
    </>
  );
}
export default ForcastList;
