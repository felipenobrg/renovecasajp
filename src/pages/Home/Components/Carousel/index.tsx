import { CarouselContainer } from "./styles";
import CarouselImage1 from "../../../../assets/CarouselImages/Carousel1.jpg";
import CarouselImage2 from "../../../../assets/CarouselImages/Carousel2.jpg";
import CarouselImage3 from "../../../../assets/CarouselImages/Carousel3.jpg";
import CarouselImage4 from "../../../../assets/CarouselImages/Carousel4.jpg";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
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
          autoplay={{ delay: 1500}}
        >
          <SwiperSlide>
            <img src={CarouselImage1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CarouselImage2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CarouselImage3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CarouselImage4} alt="" />
          </SwiperSlide>
        </Swiper>
    </CarouselContainer>
    </>
  );
}
