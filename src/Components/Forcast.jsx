import Karousel from "./Swiper";
import icon from "../assets/cloud-regular-full.svg";
import { CityContext } from "../context/CityContext";
import { useContext } from "react";

function Forcast() {
  const { forcast } = useContext(CityContext);
  return (
    <>
      {forcast !== null && (
        <>
          <section>
            {console.log(forcast)}
            <Karousel data = {forcast}></Karousel>
           
            <ul className="border-y border-gray p-5 m-5 w-[40vw]">
              {forcast.map((element, index) => (
                <li className="grid grid-cols-3  my-1 text-2xl" key={index}>
                  <time>{element.day}</time>
                  <div className="flex justify-center">
                    <img className=" w-10 h-10 " src={icon} alt="" />
                  </div>
                  <div className=" flex justify-end gap-2">
                    <span>{Math.round(element.temps.day)}°</span>
                    <span>{Math.round(element.feels_like[1])}°</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </>
  );
}
export default Forcast;
