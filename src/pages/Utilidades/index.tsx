import { AboutDelivery } from "../../components/AboutDelivery";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { ScrollUp } from "../../components/ScrollUp";
import { SectionLink } from "../../components/SectionLink";
import { Footer } from "../../components/Footer";
import { utilidadesData } from "../../data/Utilidades";

export function Utilidades() {
  return (
    <>
      <Header />
      <AboutDelivery />

      <SectionLink />
      
      {utilidadesData.map((product) => (
         <ProductCard key={product.productId} {...product} />
      ))}
    
      <ScrollUp />

      <Footer />
    </>
  );
}
