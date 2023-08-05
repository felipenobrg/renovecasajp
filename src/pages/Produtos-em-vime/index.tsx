import { AboutDelivery } from "../../components/AboutDelivery";
import { Header } from "../../components/Header";
import { SectionLink } from "../../components/SectionLink";

import { ScrollUp } from "../../components/ScrollUp";
import { Footer } from "../../components/Footer";
import { produtosEmVimeData } from "../../data/Produtos-em-vime";
import { ProductCard } from "../../components/ProductCard";

export function ProdutosEmVime() {
  return (
    <>
      <Header />
      <AboutDelivery />
      <SectionLink />

      {produtosEmVimeData.map((product) => (
        <ProductCard key={product.productId} {...product} />
      ))}

      <ScrollUp />

      <Footer />
    </>
  );
}
