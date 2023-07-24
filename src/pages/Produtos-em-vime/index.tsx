import { AboutDelivery } from "../../components/AboutDelivery";
import { Header } from "../../components/Header";
import { SectionLink } from "../../components/SectionLink";
import BanquetaPreta from "../../assets/ProdutosEmVime/banquetaPreta.jpg";
import BanquetaMarrom from "../../assets/ProdutosEmVime/banquetaMarrom.jpg";
import BanquetaBege from "../../assets/ProdutosEmVime/banquetaBege.jpg";
import ConjuntoDeTerracoPreto from "../../assets/ProdutosEmVime/ConjuntoDeTerracoPreto.jpg";
import ConjuntoDeTerracoMarrom from "../../assets/ProdutosEmVime/ConjuntoDeTerracoMarrom.jpg";
import ConjuntodeTerracoMesclado from "../../assets/ProdutosEmVime/ConjuntodeTerracoMesclado.jpg";
import CadeiraDeBalanco from "../../assets/ProdutosEmVime/CadeiraDeBalanco.jpg";

import { ProductCard } from "../../components/ProductCard";
import { ScrollUp } from "../../components/ScrollUp";
import { Footer } from "../../components/Footer";

export function ProdutosEmVime() {
  return (
    <>
      <Header />
      <AboutDelivery />
      <SectionLink />

      <ProductCard
        imgSrc={BanquetaPreta}
        title="Banqueta Preta em Vime"
        price="99,99"
        oldPrice="119,99"
        textForWhatsApp="Olá. Gostaria de comprar Banqueta Preta em Vime"
      />
      <ProductCard
        imgSrc={BanquetaMarrom}
        title="Banqueta Marrom em Vime"
        price="99,99"
        oldPrice="119,99"
        textForWhatsApp="Olá. Gostaria de comprar Banqueta Marrom em Vime"
      />
      <ProductCard
        imgSrc={BanquetaBege}
        title="Banqueta Bege em Vime"
        price="99,99"
        oldPrice="119,99"
        textForWhatsApp="Olá. Gostaria de comprar Banqueta Bege em Vime"
      />
       <ProductCard
        imgSrc={CadeiraDeBalanco}
        title="Cadeira de Balanço"
        price="199,99"
        oldPrice="219,99"
        textForWhatsApp="Olá. Gostaria de comprar Cadeira de Balanço"
      />
       <ProductCard
        imgSrc={ConjuntoDeTerracoPreto}
        title="Conjunto de Terraço Preto"
        price="549,99"
        oldPrice="599,99"
        textForWhatsApp="Olá. Gostaria de comprar Conjunto de Terraço Preto"
      />
       <ProductCard
        imgSrc={ConjuntoDeTerracoMarrom}
        title="Conjunto de Terraço Marrom"
        price="549,99"
        oldPrice="599,99"
        textForWhatsApp="Olá. Gostaria de comprar Conjunto de Terraço Marrom"
      />
       <ProductCard
        imgSrc={ConjuntodeTerracoMesclado}
        title="Conjunto de Terraço Mesclado"
        price="549,99"
        oldPrice="599,99"
        textForWhatsApp="Olá. Gostaria de comprar Conjunto de Terraço Mesclado"
      />

<ScrollUp />

<Footer />
    </>
  );
}
