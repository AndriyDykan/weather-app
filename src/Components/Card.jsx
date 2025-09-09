import icon from "../assets/cloud-regular-full.svg";
function Card({ data }) {
  return (
    <article className="w-[7rem] h-[10rem] gap-4 flex flex-col justify-center items-center ">
      <time className="text-xl">{data.date}</time>
      <img className=" w-10 h-10 " src={icon} alt="" />
      <span className="text-3xl">{Math.round(data.temps.day)}°</span>
    </article>
  );
}

export default Card;
