import {
  HeaderContainer,
  HeaderContent,
  InputContainer,
  Li,
  Ul,
} from "./styles";
import LogoRenoveCasa from "../../assets/logoRenoveCasa.webp";
import { DropDownMenu } from "./MenuDropdown";
import { SearchAllProducts } from "./SearchBarAllProducts";
import { SectionLink } from "./SectionLink";
import { useState } from "react";
import { ShoppingCartButton } from "./ShoppingCartButton";
import { X } from "phosphor-react";
import { AllProducts } from "../../data/AllProducts";

export function Header() {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [searchBar, setSearchBar] = useState("");
  const filteredAllProducts = AllProducts.filter((product) =>
    product.title.toLowerCase().includes(searchBar.toLowerCase())
  );

  const handleButtonClick = () => {
    setIsInputVisible((prevValue) => !prevValue);
    setSearchBar("")
  };

  const handleCloseInput = () => {
    setIsInputVisible(false);
    setSearchBar("")
  };

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <DropDownMenu />
          <img
            src={LogoRenoveCasa}
            alt="Renove Casa Logotipo"
            width="350"
            height="auto"
          />
          <SearchAllProducts handleButtonClick={handleButtonClick} />
          <ShoppingCartButton />
        </HeaderContent>
      </HeaderContainer>
      <SectionLink />

      {isInputVisible && (
        <InputContainer>
          <input
            type="text"
            placeholder="Olá, o que você procura?"
            onChange={(e) => setSearchBar(e.target.value)}
            value={searchBar}
          />
          <X onClick={handleCloseInput} size={25} className="close-button" />
        </InputContainer>
      )}

      {searchBar && (
        <Ul>
          {filteredAllProducts.map((product) => (
            <Li key={product.productId}>
              <h1>{product.title}</h1>
              <p>R$ {product.price}</p>
              <img src={product.imgSrc} alt={product.title} />
            </Li>
          ))}
        </Ul>
      )}

    </>
  );
}
