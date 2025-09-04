
import styles from "./Swiper.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Card from "../WeatherCard/Card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Karousel({ data }) {
  return (
    <>
      <Swiper className={styles.swiper}
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
