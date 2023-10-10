import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { ScrollUp } from "../../components/ScrollUp";
import { SectionLink } from "../../components/SectionLink";
import { Footer } from "../../components/Footer";
import { utilidadesData } from "../../data/Utilidades";
import { useState } from "react";
import { SearchBar } from "../components/SearchBar";

export function Utilidades() {
  const [searchBar, setSearchBar] = useState("");

  const filteredFurnitures = utilidadesData.filter((product) =>
    product.title.toLowerCase().includes(searchBar.toLowerCase())
  );
  
  return (
    <>
      <Header />
      <SectionLink />   
      <SearchBar value={searchBar} onChange={setSearchBar}/>
      {filteredFurnitures.map((product) => (
        <ProductCard key={product.productId} {...product} />
      ))}

    
      <ScrollUp />

      <Footer />
    </>
  );
}
