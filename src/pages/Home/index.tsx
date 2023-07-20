import { NavLink } from "react-router-dom";
import { Header } from "../../components/Header";
import { CarouselContainer, DeliveryContent, SectionContainer, SectionContent } from "./styles";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Promo1 from '../../assets/promo1.jpg'
import Promo2 from '../../assets/promo2.jpg'
import Promo3 from '../../assets/promo3.jpg'

import { Truck } from "phosphor-react";

export function Home() {
  return (
    <>
      <Header />
      <DeliveryContent>
        <Truck size={24} /> Oferecemos frete em toda João Pessoa e Região*
      </DeliveryContent>
      <SectionContainer>
        <SectionContent>
          <NavLink to={"/sofaretro"}> Sofá Retro</NavLink>
          <NavLink to={"/sofaretratil"}>Sofá Retrátil</NavLink>
          <NavLink to={"/sofapopulares"}>Sofás Populares</NavLink>
          <NavLink to={"/poltronas"}>Poltronas</NavLink>
          <NavLink to={"/camas"}>Camas</NavLink>
          <NavLink to={"/produtosvine"}>Produtos em Vine</NavLink>
          <NavLink to={"/moveis"}>Móveis</NavLink>
          <NavLink to={"/utilidades"}>Utilidades</NavLink>
        </SectionContent>
      </SectionContainer>

    
    <CarouselContainer>
      <Swiper
      modules={[ Navigation, Pagination, Scrollbar, A11y ]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true}}
    >
      <SwiperSlide>
        <img src={Promo1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Promo2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Promo3} alt="" />
      </SwiperSlide>
    </Swiper>
    </CarouselContainer>
    </>
  );
}
