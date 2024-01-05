import { Header } from "../../components/Header";
import { ScrollUp } from "../../components/ScrollUp";

import { Footer } from "../../components/Footer";
import { moveisData } from "../../data/Moveis";
import { ProductCard } from "../../components/ProductCard";
import { SearchBar } from "../components/SearchBar";
import { useState } from "react";

export function Moveis() {
  const [searchBar, setSearchBar] = useState("");

  const filteredFurnitures = moveisData.filter((product) =>
    product.title.toLowerCase().includes(searchBar.toLowerCase())
  );
  return (
    <>
      <Header />
      <SearchBar value={searchBar} onChange={setSearchBar} />
      {filteredFurnitures.map((product) => (
        <ProductCard {...product} />
      ))}
      <ScrollUp />
      <Footer />
    </>
  );
}
