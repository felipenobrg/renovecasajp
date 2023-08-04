import { AboutDelivery } from "../../components/AboutDelivery";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { SectionLink } from "../../components/SectionLink";
import { ScrollUp } from "../../components/ScrollUp";

import SofaMarrom from "../../assets/SofaRetratil/sofaMarrom.jpg";
import SofaOffWhite from "../../assets/SofaRetratil/MonacoOffWhite.jpg";
import MonacoCinza from "../../assets/SofaRetratil/MonacoCinza.jpg"

import SofaBrancoGeloLinho from "../../assets/SofaRetratil/MonacoLinhoBrancoGelo.jpg";


import SofaParisCinza from "../../assets/SofaRetratil/SofaParisCinza.jpg";
import SofaParisMarfim from "../../assets/SofaRetratil/SofaParisBege.jpg";

import SofaLuxoAzul from "../../assets/SofaRetratil/SofaLuxoAzul.jpg";
import SofaLuxoOffWhite from "../../assets/SofaRetratil/SofaLuxoBrancoGelo.jpg";
import SofaLuxoCinza from "../../assets/SofaRetratil/SofaLuxoCinza.jpg";
import { Footer } from "../../components/Footer";

export function SofaRetratil() {
  return (
    <>
      <Header />
      <AboutDelivery />
      <SectionLink />

      <ProductCard
        imgSrc={MonacoCinza}
        title="Sofá Monaco Marrom 2.0x90cm"
        price="1049,99"
        oldPrice="1199,99"
        textForWhatsApp="Olá. Gostaria de comprar Sofá Monaco Marrom"
      />

      <ProductCard
        imgSrc={SofaMarrom}
        title="Sofá Monaco Marrom 2.0x90cm"
        price="1049,99"
        oldPrice="1199,99"
        textForWhatsApp="Olá. Gostaria de comprar Sofá Monaco Marrom"
      />
       <ProductCard
        imgSrc={SofaOffWhite}
        title="Sofá Monaco Off White 2.0x90cm"
        price="1049,99"
        oldPrice="1199,99"
        textForWhatsApp="Olá. Gostaria de comprar Sofá Monaco Off White"
      />

      <ProductCard
        imgSrc={SofaBrancoGeloLinho}
        title="Sofá Monaco Branco Gelo Linho 2.0x90cm"
        price="1149,99"
        oldPrice="1299,99"
        textForWhatsApp="Olá. Gostaria de comprar Sofá Monaco Branco Gelo Linho "
      />
      
      <ProductCard
        imgSrc={SofaParisCinza}
        title="Sofá Paris Cinza Linho 2.0x90cm"
        wornOut="ESGOTADO"
        price="1199,99"
        oldPrice="1299,99"
        textForWhatsApp="Olá. Gostaria de comprar Sofá Monaco Cinza Linho"
      />
      <ProductCard
        imgSrc={SofaParisMarfim}
        title="Sofá Paris Marfim Linho 2.0x90cm"
        wornOut="ESGOTADO"
        price="1199,99"
        oldPrice="1299,99"
        textForWhatsApp="Olá. Gostaria de comprar Sofá Páris Marfim"
      />
      <ProductCard
        imgSrc={SofaLuxoAzul}
        title="Sofá Luxo Azul Royal 2.0x90cm"
        price="1499,99"
        oldPrice="1699,99"
        textForWhatsApp="Olá. Gostaria de comprar Sofá Luxo Azul Royal"
      />
      <ProductCard
        imgSrc={SofaLuxoOffWhite}
        title="Sofá Luxo Off White 2.0x90cm"
        price="1499,99"
        oldPrice="1699,99"
        textForWhatsApp="Olá. Gostaria de comprar Sofá Luxo Off White"
      />
      <ProductCard
        imgSrc={SofaLuxoCinza}
        title="Sofá Luxo Cinza 2.0x90cm"
        price="1499,99"
        oldPrice="1699,99"
        textForWhatsApp="Olá. Gostaria de comprar Sofá Luxo Cinza"
      />
      <ScrollUp />

      <Footer />
    </>
  );
}
