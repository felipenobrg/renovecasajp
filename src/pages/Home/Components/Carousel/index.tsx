import { CarouselContainer } from "./styles";
import CarouselImage2 from "../../../../assets/CarouselImages/Carousel2.webp";
import CarouselImage3 from "../../../../assets/CarouselImages/Carousel3.webp";
import CarouselImage4 from "../../../../assets/CarouselImages/Carousel4.webp";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export function Carousel() {
  return (
    <>
      <CarouselContainer>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 1500 }}
        >
          <SwiperSlide>
            <img
              src={CarouselImage2}
              alt="Sofá Retrátil Reclinável com o valor de 999.99 reais"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={CarouselImage3}
              alt="Sofá Retrô Jolie acompanhado de um puff de brinde com o valor de 899.99 reais"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={CarouselImage4}
              alt="Sofá Retrô Linho acompanhado de um puff de brinde com o valor de 999.99 reais"
            />
          </SwiperSlide>
        </Swiper>
      </CarouselContainer>
    </>
  );
}
