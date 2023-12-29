import { useState } from "react";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { ScrollUp } from "../../components/ScrollUp";

import { camaData } from "../../data/Cama";
import { SearchBar } from "../components/SearchBar";

export function Camas() {
  const [searchBar, setSearchBar] = useState("");

  const filteredFurnitures = camaData.filter((product) =>
    product.title.toLowerCase().includes(searchBar.toLowerCase())
  );
  return (
    <>
      <Header />

      <SearchBar value={searchBar} onChange={setSearchBar} />
      {filteredFurnitures.map((product) => (
        <ProductCard  {...product} />
      ))}

      <ScrollUp />
    </>
  );
}
