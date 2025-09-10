import useWeatherIcon from "../hooks/icons";
function ForcastList({ day=0, icon_id=null, temp=0, feels_like=0 }) {
  const icon_src = useWeatherIcon(icon_id);
  return (
    <>
      <li className="grid grid-cols-3 my-1 text-2xl">
        <time>{day}</time>
        <div className="flex justify-center">
          <img className=" w-10 h-10 " src={icon_src} alt="" />
        </div>
        <div className=" flex justify-end gap-2">
          <span>{Math.round(temp)}°</span>
          <span>{Math.round(feels_like)}°</span>
        </div>
      </li>
    </>
  );
}
export default ForcastList;
