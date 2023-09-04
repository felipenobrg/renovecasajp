import { AboutDelivery } from "../../components/AboutDelivery";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { SectionLink } from "../../components/SectionLink";
import { ScrollUp } from "../../components/ScrollUp";
import { Footer } from "../../components/Footer";
import { sofaRetroData } from "../../data/Sofa-retro";
import { useState } from "react";
import { SearchBar } from "../components/SearchBar";

export function SofaRetro() {
  const [searchBar, setSearchBar] = useState("");

  const filteredFurnitures = sofaRetroData.filter((product) =>
    product.title.toLowerCase().includes(searchBar.toLowerCase())
  );

  return (
    <>
      <Header />
      <AboutDelivery />
      <SectionLink />
      <SearchBar  value={searchBar} onChange={setSearchBar}/>
      {filteredFurnitures.map((product) => (
        <ProductCard key={product.productId} {...product} />
      ))}

      <ScrollUp />

      <Footer />
    </>
  );
}
