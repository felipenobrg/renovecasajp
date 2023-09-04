import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { ScrollUp } from "../../components/ScrollUp";
import { SectionLink } from "../../components/SectionLink";

import { Footer } from "../../components/Footer";
import { poltronasData } from "../../data/Poltronas";
import { SearchBar } from "../components/SearchBar";
import { useState } from "react";

export function Poltronas() {
  const [searchBar, setSearchBar] = useState("");

  const filteredFurnitures = poltronasData.filter((product) =>
    product.title.toLowerCase().includes(searchBar.toLowerCase())
  );
  return (
    <>
      <Header />

      <SectionLink />
      <SearchBar value={searchBar} onChange={setSearchBar} />
      {filteredFurnitures.map((product) => (
        <ProductCard key={product.productId} {...product} />
      ))}
      <ScrollUp />
      <Footer />
    </>
  );
}
