import { AboutDelivery } from "../../components/AboutDelivery";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { ScrollUp } from "../../components/ScrollUp";
import { SectionLink } from "../../components/SectionLink";

import { Footer } from "../../components/Footer";
import { poltronasData } from "../../data/Poltronas";

export function Poltronas() {
  return (
    <>
      <Header />
      <AboutDelivery />

      <SectionLink />

      {poltronasData.map((product) => (
         <ProductCard key={product.productId} {...product} />
      ))}
       <ScrollUp />
      <Footer />
    </>
  );
}
