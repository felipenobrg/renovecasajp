import { AboutDelivery } from "../../components/AboutDelivery";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { ScrollUp } from "../../components/ScrollUp";
import { SectionLink } from "../../components/SectionLink";
import PoltronaCapitoneMarrom from '../../assets/Poltronas/PoltronaCapitoneMarrom.jpg'
import PoltronaCapitoneRosa from '../../assets/Poltronas/PoltronaCapitoneRosa.jpg'
import PoltronaAlmofadaCinza from '../../assets/Poltronas/PoltronaAlmodadaCinza.jpg'
import PoltronaAlmofadaVerde from '../../assets/Poltronas/PoltronaAlmofadadVerde.jpg'
import PoltronaAlmofadaAzul from '../../assets/Poltronas/PoltronaAlmofadadaAzul.jpg'
import PoltronaAlmofadaBege from '../../assets/Poltronas/PoltronaAlmofadadaBege.jpg'
import PoltronaBobBege from '../../assets/Poltronas/PoltronaBobBege.jpg'
import PoltronaBobTerraCota from '../../assets/Poltronas/PoltronaBobTerraCota.jpg'

export function Poltronas() {
  return (
    <>
      <Header />
      <AboutDelivery />

      <SectionLink />

      <ScrollUp />

      <ProductCard
        imgSrc={PoltronaCapitoneMarrom}
        title="Poltrona Capitonê Marrom"
        price="219,99"
        oldPrice="249,99"
        textForWhatsApp="Olá. Gostaria de comprar Poltrona Capitonê Marrom"
      />
       <ProductCard
        imgSrc={PoltronaCapitoneRosa}
        title="Poltrona Capitonê Rosa"
        price="219,99"
        oldPrice="249,99"
        textForWhatsApp="Olá. Gostaria de comprar Poltrona Capitonê Rosa"
      />
      <ProductCard
        imgSrc={PoltronaAlmofadaCinza}
        title="Poltrona Poltrona Almofadada Cinza"
        price="219,99"
        oldPrice="249,99"
        textForWhatsApp="Olá. Gostaria de comprar Poltrona Almofadada Cinza"
      />
      <ProductCard
        imgSrc={PoltronaAlmofadaBege}
        title="Poltrona Poltrona Almofadada Cinza"
        price="219,99"
        oldPrice="249,99"
        textForWhatsApp="Olá. Gostaria de comprar Poltrona Almofadada Cinza"
      />
      <ProductCard
        imgSrc={PoltronaAlmofadaVerde}
        title="Poltrona Almofadada Verde"
        price="219,99"
        oldPrice="249,99"
        textForWhatsApp="Olá. Gostaria de comprar Poltrona Almofadada Verde"
      />
      <ProductCard
        imgSrc={PoltronaAlmofadaAzul}
        title="Poltrona Almofadada Azul"
        price="219,99"
        oldPrice="249,99"
        textForWhatsApp="Olá. Gostaria de comprar Poltrona Almofadada Azul"
      />
      <ProductCard
        imgSrc={PoltronaBobBege}
        title="Poltrona Bob Bege"
        price="219,99"
        oldPrice="249,99"
        textForWhatsApp="Olá. Gostaria de comprar Poltrona Bob Bege"
      />
      <ProductCard
        imgSrc={PoltronaBobTerraCota}
        title="Poltrona Bob Terra Cota"
        price="219,99"
        oldPrice="249,99"
        textForWhatsApp="Olá. Gostaria de comprar Poltrona Bob Terra Cota"
      />
    </>
  );
}
