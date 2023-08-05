import { AboutDelivery } from "../../components/AboutDelivery";
import { Header } from "../../components/Header";
import { SectionLink } from "../../components/SectionLink";


import { ScrollUp } from "../../components/ScrollUp";
import { Footer } from "../../components/Footer";
import { sofasPopularesData } from "../../data/Sofas-populares";
import { ProductCard } from "../../components/ProductCard";

export function SofasPopulares() {
  return (
    <>
      <Header />
      <AboutDelivery />
      <SectionLink />


      {sofasPopularesData.map((product) => (
         <ProductCard key={product.productId} {...product} />
      ))}

      <ScrollUp />
      <Footer />
    </>
  );
}
