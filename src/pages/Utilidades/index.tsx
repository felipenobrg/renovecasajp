import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { ScrollUp } from "../../components/ScrollUp";
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
      <SearchBar value={searchBar} onChange={setSearchBar}/>
      {filteredFurnitures.map((product) => (
        <ProductCard key={product.productId} {...product} />
      ))}
      <ScrollUp />
      <Footer />
    </>
  );
}
