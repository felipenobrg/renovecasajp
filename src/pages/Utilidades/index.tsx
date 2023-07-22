import { AboutDelivery } from "../../components/AboutDelivery";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { ScrollUp } from "../../components/ScrollUp";
import { SectionLink } from "../../components/SectionLink";

import Baus from '../../assets/Utilidades/Baus.jpg'
import CadeiraDeBalancoDeFio from '../../assets/Utilidades/CadeiraDeBalanco.jpg'
import CantinhoDeCafe from '../../assets/Utilidades/CatinhoDeCafe.jpg'


export function Utilidades() {
  return (
    <>
      <Header />
      <AboutDelivery />

      <SectionLink />

      <ProductCard
        imgSrc={Baus}
        title="Báu 90x40"
        price="99,99"
        oldPrice="119,99"
        textForWhatsApp="Olá. Gostaria de comprar Baú"
      />
     <ProductCard
        imgSrc={CadeiraDeBalancoDeFio}
        title="Cadeira de Balanço de Fio"
        price="189,99"
        oldPrice="199,99"
        textForWhatsApp="Olá. Gostaria de comprar Cadeira de Balanço de Fio"
      />
        <ProductCard
        imgSrc={CantinhoDeCafe}
        title="Cantinho de Chá"
        price="299,99"
        oldPrice="329,99"
        textForWhatsApp="Olá. Gostaria de comprar Cantinho de Chá"
      />
      <ScrollUp />

      
    </>
  );
}
