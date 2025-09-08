

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Card from "./Card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Karousel({ data }) {
  return (
    <>
      <Swiper 
        modules={[Navigation]}
        navigation
        spaceBetween={200}
        slidesPerView={4}
      >
        {data.map((element, index) => (
          <SwiperSlide>
            <Card data={element}></Card>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </>
  );
}

export default Karousel;
