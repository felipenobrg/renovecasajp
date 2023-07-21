import { AboutDelivery } from "../../components/AboutDelivery";
import { Header } from "../../components/Header";
import { ScrollUp } from "../../components/ScrollUp";
import { SectionLink } from "../../components/SectionLink";
import { ProductCard } from "../../components/ProductCard";

import ArmarioPreto from '../../assets/Moveis/ArmarioDeCozinhaPreto.jpg'
import ArmarioBranco from '../../assets/Moveis/ArmarioDeCozinhaBranco.jpg'
import ArmarioMarrom from '../../assets/Moveis/ArmarioDeCozinhaMarrom.jpg'
import PainelDeTv46Polegadas from '../../assets/Moveis/PainelParaTv.jpg'
import PainelDeTv55Polegadas from '../../assets/Moveis/PainelParaTv55.jpg'




export function Moveis() {
  return (
    <>
      <Header />
      <AboutDelivery />

      <SectionLink />
      <ProductCard
        imgSrc={ArmarioPreto}
        title="Armário de Cozinha Preto"
        price="749,99"
        oldPrice="899,99"
        textForWhatsApp="Olá. Gostaria de comprar Armário de Cozinha Preto e Branco"
      />
       <ProductCard
        imgSrc={ArmarioBranco}
        title="Armário de Cozinha Preto"
        price="749,99"
        oldPrice="899,99"
        textForWhatsApp="Olá. Gostaria de comprar Armário de Cozinha Preto"
      />
       <ProductCard
        imgSrc={ArmarioMarrom}
        title="Armário de Cozinha Marrom"
        price="749,99"
        oldPrice="899,99"
        textForWhatsApp="Olá. Gostaria de comprar Armário de Cozinha Marrom"
      />
       <ProductCard
        imgSrc={PainelDeTv46Polegadas}
        title="Painel de TV 46 Polegadas"
        price="449,99"
        oldPrice="599,99"
        textForWhatsApp="Olá. Gostaria de comprar Painel de TV 46 Polegadas"
      />
       <ProductCard
        imgSrc={PainelDeTv55Polegadas}
        title="Painel de TV 55 Polegadas"
        price="549,99"
        oldPrice="699,99"
        textForWhatsApp="Olá. Gostaria de comprar Painel de TV 55 Polegadas"
      />
      <ScrollUp />
    </>
  );
}
