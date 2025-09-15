import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Card from "./Card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Karousel({ data }) {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={0}
      slidesPerView={6}
      pagination={{ clickable: true,  type:"progressbar"}}
      breakpoints={{
        200: {
          slidesPerView: 3, 
        },
        700:{
          lidesPerView: 4,
        },
        900: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 6,
        },
      }}
        className=""
    >
      {data.map((element, index) => (
        <SwiperSlide key={index}>
          <Card data={element} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Karousel;
