import { AboutDelivery } from "../../components/AboutDelivery";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { SectionLink } from "../../components/SectionLink";
import SofaRetroCinza from "../../assets/SofaRetro/RetroCinza.jpg";
import SofaRetroPreto from "../../assets/SofaRetro/RetroPreto.jpg";
import SofaRetroAzul from "../../assets/SofaRetro/RetroAzul.jpg";
import SofaRetroVermelho from "../../assets/SofaRetro/RetroVermelho.jpg";
import SofaRetroTerraCota from "../../assets/SofaRetro/RetroTerraCota.jpg";
import { ScrollUp } from "../../components/ScrollUp";

export function SofaRetro() {
  return (
    <>
      <Header />
      <AboutDelivery />
      <SectionLink />

      <ProductCard
        imgSrc={SofaRetroCinza}
        title="Sofá Retrô Cinza Chumbo 1.90x90cm"
        price="949,99"
        oldPrice="1099,99"
        textForWhatsApp="Olá. Gostaria de comprar Sofá Retrô Cinza Chumbo"
      />
      <ProductCard
        imgSrc={SofaRetroPreto}
        title="Sofá Retrô Preto 1.90x90cm"
        price="949,99"
        oldPrice="1099,99"
        textForWhatsApp="Olá. Gostaria de comprar Sofá Retrô Preto"
      />
      <ProductCard
        imgSrc={SofaRetroAzul}
        title="Sofá Retrô Azul Royal 1.90x90cm"
        price="949,99"
        oldPrice="1099,99"
        textForWhatsApp="Olá. Gostaria de comprar Sofá Retrô Azul Royal"
      />
      <ProductCard
        imgSrc={SofaRetroVermelho}
        title="Sofá Retrô Vermelho 1.90x90cm"
        price="949,99"
        oldPrice="1099,99"
        textForWhatsApp="Olá. Gostaria de comprar Sofá Retrô Vermelho"
      />
      <ProductCard
        imgSrc={SofaRetroTerraCota}
        title="Sofá Retrô Terra Cota 1.90x90cm"
        price="1049,99"
        oldPrice="1199,99"
        textForWhatsApp="Olá. Gostaria de comprar Sofá Retrô Terra Cota"
      />
      <ScrollUp />
    </>
  );
}
