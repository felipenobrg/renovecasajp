import { AboutDelivery } from "../../components/AboutDelivery";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { ScrollUp } from "../../components/ScrollUp";
import { SectionLink } from "../../components/SectionLink";
import { camaData } from "../../data/Cama";

export function Camas() {
  return (
    <>
      <Header />
      <AboutDelivery />

      <SectionLink />

      {camaData.map((product) => (
         <ProductCard key={product.productId} {...product} />
      ))}

      <ScrollUp />
    </>
  );
}
