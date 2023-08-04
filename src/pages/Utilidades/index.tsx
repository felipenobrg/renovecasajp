import { AboutDelivery } from "../../components/AboutDelivery";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { ScrollUp } from "../../components/ScrollUp";
import { SectionLink } from "../../components/SectionLink";

import Baus from "../../assets/Utilidades/Baus.jpg";
import CadeiraDeBalancoDeFio from "../../assets/Utilidades/CadeiraDeBalanco.jpg";
import CantinhoDeCafe from "../../assets/Utilidades/CatinhoDeCafe.jpg";
import PuffRetro from "../../assets/Utilidades/PuffsRetro.jpg";
import SapateiraCinzaVermelho from "../../assets/Utilidades/SapateiraCinzaVermelho.jpg";
import SapateiraPretaBege from "../../assets/Utilidades/SapateiraPretaBege.jpg";
import QuadroLeao from "../../assets/Utilidades/QuadroLeao.jpg";
import QuadroLeaoLaranja from "../../assets/Utilidades/QuadroLeaoLaranja.jpg";
import QuadroLeaoELeoa from "../../assets/Utilidades/QuadroLeaoELeoa.jpg";
import { Footer } from "../../components/Footer";

export function Utilidades() {
  return (
    <>
      <Header />
      <AboutDelivery />

      <SectionLink />

      <ProductCard
        imgSrc={PuffRetro}
        title="Puff Retrô"
        price="89,99"
        oldPrice="109,99"
        textForWhatsApp="Olá. Gostaria de comprar Puff Retrô"
      />
      <ProductCard
        imgSrc={SapateiraPretaBege}
        title="Sapateira"
        price="149,99"
        oldPrice="189,99"
        textForWhatsApp="Olá. Gostaria de comprar Sapateira"
      />
      <ProductCard
        imgSrc={SapateiraCinzaVermelho}
        title="Sapateira"
        price="149,99"
        oldPrice="189,99"
        textForWhatsApp="Olá. Gostaria de comprar Sapateira"
      />
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
      <ProductCard
        imgSrc={QuadroLeaoLaranja}
        title="Quadro Decorativo Leão Laranja 1.20x60"
        price="129,99"
        oldPrice="159,99"
        textForWhatsApp="Olá. Quadro Decorativo Leão Laranja"
      />
      <ProductCard
        imgSrc={QuadroLeao}
        title="Quadro Decorativo Leão 1.20x60"
        price="129,99"
        oldPrice="159,99"
        textForWhatsApp="Olá. Gostaria de comprar Quadro Decorativo Leão"
      />
      <ProductCard
        imgSrc={QuadroLeaoELeoa}
        title="Quadro Decorativo Leão e Leoa 1.20x60"
        price="129,99"
        oldPrice="159,99"
        textForWhatsApp="Olá. Quadro Decorativo Leão e Leoa"
      />
      <ScrollUp />

      <Footer />
    </>
  );
}
