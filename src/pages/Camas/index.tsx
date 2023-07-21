import { AboutDelivery } from "../../components/AboutDelivery";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { ScrollUp } from "../../components/ScrollUp";
import { SectionLink } from "../../components/SectionLink";
import CamaDeCasalSimples from "../../assets/Camas/CamaDeCasalSimples.jpg"



export function Camas() {
  return (
    <>
      <Header />
      <AboutDelivery />

      <SectionLink />

      <ProductCard
        imgSrc={CamaDeCasalSimples}
        title="Cama Box de Casal Topázio"
        price="549,99"
        oldPrice="699,99"
        textForWhatsApp="Olá. Gostaria de comprar Cama Box de Casal Topázio"
      />

      <ScrollUp />
    </>
  );
}
