import { AboutDelivery } from "../../components/AboutDelivery";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { SectionLink } from "../../components/SectionLink";
import SofaRetroCinza from '../../assets/SofaRetro/RetroCinza.jpg'
import SofaRetroPreto from '../../assets/SofaRetro/RetroPreto.jpg'
import SofaRetroAzul from '../../assets/SofaRetro/RetroAzul.jpg'
import SofaRetroVermelho from '../../assets/SofaRetro/RetroVermelho.jpg'
import SofaRetroTerraCota from '../../assets/SofaRetro/RetroTerraCota.jpg'

export function SofaRetro() {
  return (
    <>
      <Header />
      <AboutDelivery />
      <SectionLink />
 
      <ProductCard imgSrc={SofaRetroCinza} title="Sofá Retrô Cinza Chumbo 1.90x90cm" price="949,99" oldPrice="1099,99" />
      <ProductCard imgSrc={SofaRetroPreto} title="Sofá Retrô Preto Chumbo 1.90x90cm" price="949,99" oldPrice="1099,99" />
      <ProductCard imgSrc={SofaRetroAzul} title="Sofá Retrô Azul Royal Chumbo 1.90x90cm" price="949,99" oldPrice="1099,99" />
      <ProductCard imgSrc={SofaRetroVermelho} title="Sofá Retrô Vermelho Chumbo 1.90x90cm" price="949,99" oldPrice="1099,99" />
      <ProductCard imgSrc={SofaRetroTerraCota} title="Sofá Retrô Terra Cota 1.90x90cm" price="1049,99" oldPrice="1199,99" />
     
    </>
  );
}
