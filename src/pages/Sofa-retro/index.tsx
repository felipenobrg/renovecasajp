import { AboutDelivery } from "../../components/AboutDelivery";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { SectionLink } from "../../components/SectionLink";
import { ScrollUp } from "../../components/ScrollUp";
import { Footer } from "../../components/Footer";
import { sofaRetroData } from "../../data/Sofa-retro";

export function SofaRetro() {
  return (
    <>
      <Header />
      <AboutDelivery />
      <SectionLink />

      {sofaRetroData.map((product) => (
         <ProductCard key={product.productId} {...product} />
      ))}

      <ScrollUp />

      <Footer />
    </>
  );
}
