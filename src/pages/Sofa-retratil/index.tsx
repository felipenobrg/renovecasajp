import { useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { ScrollUp } from "../../components/ScrollUp";

import { sofaRetratilData } from "../../data/Sofa-retratil";
import { SearchBar } from "../components/SearchBar";

export function SofaRetratil() {
  const [searchBar, setSearchBar] = useState("");

  const filteredFurnitures = sofaRetratilData.filter((product) =>
    product.title.toLowerCase().includes(searchBar.toLowerCase())
  );
  return (
    <>
      <Header />

      <SearchBar value={searchBar} onChange={setSearchBar} />
      {filteredFurnitures.map((product) => (
        <ProductCard key={product.productId} {...product} />
      ))}

      <ScrollUp />

      <Footer />
    </>
  );
}
