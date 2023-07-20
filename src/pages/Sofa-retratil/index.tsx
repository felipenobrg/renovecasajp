import { AboutDelivery } from "../../components/AboutDelivery";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { SectionLink } from "../../components/SectionLink";

import SofaCinza from "../../assets/SofaRetratil/sofaCinza.jpg"
import SofaMarrom from "../../assets/SofaRetratil/sofaMarrom.jpg"
import SofaVermelho from "../../assets/SofaRetratil/sofaVermelho.jpg"


export function SofaRetratil() {
  return (
    <>
      <Header />
      <AboutDelivery />
      <SectionLink />

      <ProductCard imgSrc={SofaCinza} title="Sofá Retrátil Cinza Chumbo 2.0x90cm" price="1049,99" oldPrice="1199,99" />
      <ProductCard imgSrc={SofaMarrom} title="Sofá Retrátil Marrom 2.0x90cm" price="1049,99" oldPrice="1199,99" />
      <ProductCard imgSrc={SofaVermelho} title="Sofá Retrátil Vermelho 2.0x90cm" price="1049,99" oldPrice="1199,99" />
    </>
  );
}
