import { AboutDelivery } from "../../components/AboutDelivery";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { ScrollUp } from "../../components/ScrollUp";
import { SectionLink } from "../../components/SectionLink";
import CamaDeCasalSimples from "../../assets/Camas/CamaDeCasalSimples.jpg"
import CamaDeSolteiroSimples from "../../assets/Camas/CamaDeSolteiro.jpg"
import CamaMolasEnsacadas from "../../assets/Camas/CamaDeCasalMolas.jpg"



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
        <ProductCard
        imgSrc={CamaDeSolteiroSimples}
        title="Cama Box de Solteiro Topázio"
        price="449,99"
        oldPrice="599,99"
        textForWhatsApp="Olá. Gostaria de comprar Cama Box de Solteiro Topázio"
      />
        <ProductCard
        imgSrc={CamaMolasEnsacadas}
        title="Cama Box de Casal Molas Ensacadas Topázio"
        price="899,99"
        oldPrice="999,99"
        textForWhatsApp="Olá. Gostaria de comprar Cama Box de Casal Molas Ensacadas Topázi"
      />

      <ScrollUp />
    </>
  );
}
