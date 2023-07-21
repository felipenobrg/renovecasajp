import { AboutDelivery } from "../../components/AboutDelivery";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { ScrollUp } from "../../components/ScrollUp";
import { SectionLink } from "../../components/SectionLink";

import ConjuntoDeSofaCinza from "../../assets/SofasPopulares/ConjuntoDeSofaCinza.jpg"
import ConjuntoDeSofaCinzaEscuro from "../../assets/SofasPopulares/ConjuntoDeSofaCinzaEscuro.jpg"
import ConjuntoDeSofaMarrom from "../../assets/SofasPopulares/ConjuntoDeSofaMarrom.jpg"
import DubaiCinza from "../../assets/SofasPopulares/SofaDubaiCinza.jpg"
import DubaiMarrom from "../../assets/SofasPopulares/SofaDubaiMarrom.jpg"

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
      
    </>
  );
}
