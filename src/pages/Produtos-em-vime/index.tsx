import { AboutDelivery } from "../../components/AboutDelivery";
import { Header } from "../../components/Header";
import { SectionLink } from "../../components/SectionLink";

import { ScrollUp } from "../../components/ScrollUp";
import { Footer } from "../../components/Footer";
import { produtosEmVimeData } from "../../data/Produtos-em-vime";
import { ProductCard } from "../../components/ProductCard";
import { SearchBar } from "../components/SearchBar";
import { useState } from "react";

export function ProdutosEmVime() {
  const [searchBar, setSearchBar] = useState("");

  const filteredFurnitures = produtosEmVimeData.filter((product) =>
    product.title.toLowerCase().includes(searchBar.toLowerCase())
  );
  return (
    <>
      <Header />
      <AboutDelivery />
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
