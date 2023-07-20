import { AboutDelivery } from "../../components/AboutDelivery";
import { Header } from "../../components/Header";
import { SectionLink } from "../../components/SectionLink";
import BanquetaPreta from "../../assets/ProdutosEmVime/banquetaPreta.jpg";
import BanquetaMarrom from "../../assets/ProdutosEmVime/banquetaMarrom.jpg";
import BanquetaBege from "../../assets/ProdutosEmVime/banquetaBege.jpg";
import { ProductCard } from "../../components/ProductCard";

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
    </>
  );
}
