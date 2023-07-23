import { AboutDelivery } from "../../components/AboutDelivery";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { SectionLink } from "../../components/SectionLink";

import ConjuntoDeSofaCinza from "../../assets/SofasPopulares/ConjuntoDeSofaCinza.jpg";
import ConjuntoDeSofaCinzaEscuro from "../../assets/SofasPopulares/ConjuntoDeSofaCinzaEscuro.jpg";
import ConjuntoDeSofaMarrom from "../../assets/SofasPopulares/ConjuntoDeSofaMarrom.jpg";
import ConjuntoDeSofaCinzaSemAlmofada from "../../assets/SofasPopulares/ConjuntoSofaCinza.jpeg";
import ConjuntoDeSofaVermelho from "../../assets/SofasPopulares/ConjuntoDeSofaVermelho.jpg";

import SofaTresLugaresMarrom from "../../assets/SofasPopulares/SofaTresLugaresMarrom.jpg";
import SofaTresLugaresPretoComPuffs from "../../assets/SofasPopulares/SofaTresLugaresPretoComPuffs.jpg";

import DubaiDoisLugaresBege from "../../assets/SofasPopulares/SofaDoisLugaresBegeDubai.jpeg";
import DubaiCinza from "../../assets/SofasPopulares/SofaDubaiCinza.jpg";
import DubaiMarrom from "../../assets/SofasPopulares/SofaDubaiMarrom.jpg";
import { ScrollUp } from "../../components/ScrollUp";

export function SofasPopulares() {
  return (
    <>
      <Header />
      <AboutDelivery />

      <SectionLink />

      <ProductCard
        imgSrc={ConjuntoDeSofaCinza}
        title="Conjunto de Sofá Cinza"
        price="749,99"
        oldPrice="899,99"
        textForWhatsApp="Olá. Gostaria de comprar Conjunto de Sofá Cinza"
      />
      <ProductCard
        imgSrc={ConjuntoDeSofaCinzaEscuro}
        title="Conjunto de Sofá Cinza Escuro"
        price="749,99"
        oldPrice="899,99"
        textForWhatsApp="Olá. Gostaria de comprar Conjunto de Sofá Cinza Escuro"
      />
      <ProductCard
        imgSrc={ConjuntoDeSofaMarrom}
        title="Conjunto de Sofá Marrom"
        price="749,99"
        oldPrice="899,99"
        textForWhatsApp="Olá. Gostaria de comprar Conjunto de Sofá Marrom"
      />
      <ProductCard
        imgSrc={ConjuntoDeSofaVermelho}
        title="Conjunto de Sofá Vermelho"
        price="749,99"
        oldPrice="899,99"
        textForWhatsApp="Olá. Gostaria de comprar Conjunto de Sofá Vermelho"
      />
      <ProductCard
        imgSrc={ConjuntoDeSofaCinzaSemAlmofada}
        title="C
        onjunto de Sofá Cinza Sem Almofada"
        price="599,99"
        oldPrice="699,99"
        textForWhatsApp="Olá. Gostaria de comprar Conjunto de Sofá Cinza Sem Almofada"
      />
      <ProductCard
        imgSrc={SofaTresLugaresMarrom}
        title="Conjunto de Sofá Três Lugares Marrom"
        price="449,99"
        oldPrice="549,99"
        textForWhatsApp="Olá. Gostaria de comprar Conjunto de Sofá Três Lugares Marrom"
      />
       
      <ProductCard
        imgSrc={SofaTresLugaresPretoComPuffs}
        title="Sofá Três Lugares Preto com 2 Puffs"
        price="549,99"
        oldPrice="649,99"
        textForWhatsApp="Olá. Gostaria de comprar Sofá Três Lugares Preto com 2 Puffs"
      />
      <ProductCard
        imgSrc={DubaiDoisLugaresBege}
        title="Sofá Dubai Dois Lugares Bege"
        price="449,99"
        oldPrice="499,99"
        textForWhatsApp="Olá. Gostaria de comprar Sofá Dubai Dois Lugares Bege"
      />

      <ProductCard
        imgSrc={DubaiCinza}
        title="Sofá Dubai Cinza Três Lugares"
        price="449,99"
        oldPrice="599,99"
        textForWhatsApp="Olá. Gostaria de comprar Sofá Dubai Cinza Três Lugares"
      />
      <ProductCard
        imgSrc={DubaiMarrom}
        title="Sofá Dubai Marrom Três Lugares"
        price="449,99"
        oldPrice="599,99"
        textForWhatsApp="Olá. Gostaria de comprar Sofá Dubai Marrpm Três Lugares"
      />

      <ScrollUp />
    </>
  );
}
