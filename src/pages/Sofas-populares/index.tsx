import { Header } from "../../components/Header";



import { ScrollUp } from "../../components/ScrollUp";
import { Footer } from "../../components/Footer";
import { sofasPopularesData } from "../../data/Sofas-populares";
import { ProductCard } from "../../components/ProductCard";
import { SearchBar } from "../components/SearchBar";
import { useState } from "react";

export function SofasPopulares() {
  const [searchBar, setSearchBar] = useState("");

  const filteredFurnitures = sofasPopularesData.filter((product) =>
    product.title.toLowerCase().includes(searchBar.toLowerCase())
  );
  return (
    <>
      <Header />

      <SearchBar  value={searchBar} onChange={setSearchBar}/>
      {filteredFurnitures.map((product) => (
        <ProductCard key={product.productId} {...product} />
      ))}
      <ScrollUp />
      <Footer />
    </>
  );
}
