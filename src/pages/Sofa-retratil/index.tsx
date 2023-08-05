import { AboutDelivery } from "../../components/AboutDelivery";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { ScrollUp } from "../../components/ScrollUp";
import { SectionLink } from "../../components/SectionLink";
import { sofaRetratilData } from "../../data/Sofa-retratil";

export function SofaRetratil() {
  return (
    <>
      <Header />
      <AboutDelivery />
      <SectionLink />
      {sofaRetratilData.map((product) => (
        <ProductCard key={product.productId} {...product} />
      ))}
      <ScrollUp />

      <Footer />
    </>
  );
}
