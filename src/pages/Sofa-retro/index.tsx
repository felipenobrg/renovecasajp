import { AboutDelivery } from "../../components/AboutDelivery";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { SectionLink } from "../../components/SectionLink";
import SofaRetroCinza from "../../assets/SofaRetro/RetroCinza.jpg";
import SofaRetroOffWhite from "../../assets/SofaRetro/RetroOffWhite.jpg";
import SofaRetroPreto from "../../assets/SofaRetro/RetroPreto.jpg";
import SofaRetroAzul from "../../assets/SofaRetro/RetroAzul.jpg";
import SofaRetroVermelho from "../../assets/SofaRetro/RetroVermelho.jpg";
import SofaRetroTerraCota from "../../assets/SofaRetro/RetroTerraCota.jpg";
import RetroLinhoMarromEscuro from "../../assets/SofaRetro/RetroLinhoMarromEscuro.jpg";
import RetroLinhoMarromClaroAlmofadaLisa from "../../assets/SofaRetro/RetroLinhoMarromClaro.jpg";
import RetroDeltaMarfim from "../../assets/SofaRetro/SofaDelta.jpg";



import { ScrollUp } from "../../components/ScrollUp";
import { Footer } from "../../components/Footer";

export function SofaRetro() {
  return (
    <>
      <Header />
      <AboutDelivery />
      <SectionLink />

      <ProductCard
        imgSrc={SofaRetroOffWhite}
        title="Sofá Retrô Cinza Off White 1.90x90cm"
        price="899,99"
        oldPrice="949,99"
        textForWhatsApp="Olá. Gostaria de comprar Sofá Retrô Off White"
      />
       <ProductCard
        imgSrc={SofaRetroCinza}
        title="Sofá Retrô Cinza Chumbo 1.90x90cm"
        price="899,99"
        oldPrice="949,99"
        textForWhatsApp="Olá. Gostaria de comprar Sofá Retrô Cinza Chumbo"
      />
      <ProductCard
        imgSrc={SofaRetroPreto}
        title="Sofá Retrô Preto 1.90x90cm"
        price="899,99"
        oldPrice="949,99"
        textForWhatsApp="Olá. Gostaria de comprar Sofá Retrô Preto"
      />
      <ProductCard
        imgSrc={SofaRetroAzul}
        title="Sofá Retrô Azul Royal 1.90x90cm"
        price="899,99"
        oldPrice="949,99"
        textForWhatsApp="Olá. Gostaria de comprar Sofá Retrô Azul Royal"
      />
      <ProductCard
        imgSrc={SofaRetroVermelho}
        title="Sofá Retrô Vermelho 1.90x90cm"
        price="899,99"
        oldPrice="949,99"
        textForWhatsApp="Olá. Gostaria de comprar Sofá Retrô Vermelho"
      />
      <ProductCard
        imgSrc={SofaRetroTerraCota}
        title="Sofá Retrô Terra Cota 1.90x90cm"
        price="899,99"
        oldPrice="949,99"
        textForWhatsApp="Olá. Gostaria de comprar Sofá Retrô Terra Cota"
      />
       <ProductCard
        imgSrc={RetroLinhoMarromEscuro}
        title="Sofá Retrô Linho Marrom Escuro 1.90x90cm"
         price="899,99"
        oldPrice="949,99"
        textForWhatsApp="Olá. Gostaria de comprar Sofá Linho Marrom Escuro"
      />
       <ProductCard
        imgSrc={RetroLinhoMarromClaroAlmofadaLisa}
        title="Sofá Retrô Linho Marrom Claro c/ Almofada Lisa 1.90x90cm"
        price="999,99"
        oldPrice="1299,99"
        textForWhatsApp="Olá. Gostaria de comprar Sofá Linho Marrom Claro c/ Almofada"
      />
        <ProductCard
        imgSrc={RetroDeltaMarfim}
        title="Sofá Retrô Delta Marfim Linho (Acompanha o Centro) 2.0x90cm"
        price="1199,99"
        oldPrice="1299,99"
        textForWhatsApp="Olá. Gostaria de comprar Sofá Páris Marfim"
      />
      <ScrollUp />

      <Footer />
    </>
  );
}
