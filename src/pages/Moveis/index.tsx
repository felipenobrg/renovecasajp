import { AboutDelivery } from "../../components/AboutDelivery";
import { Header } from "../../components/Header";
import { ScrollUp } from "../../components/ScrollUp";
import { SectionLink } from "../../components/SectionLink";
import { Footer } from "../../components/Footer";
import { moveisData } from "../../data/Moveis";
import { ProductCard } from "../../components/ProductCard";

export function Moveis() {
  return (
    <>
      <Header />
      <AboutDelivery />

      <SectionLink />
      {moveisData.map((product) => (
        <ProductCard key={product.productId} {...product} />
      ))}
      <ScrollUp />
      <Footer />
    </>
  );
}
