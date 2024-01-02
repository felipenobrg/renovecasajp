import {
  HeaderContainer,
  HeaderContent,
  InputContainer,
} from "./styles";
import LogoRenoveCasa from "../../assets/logoRenoveCasa.webp";
import { DropDownMenu } from "./MenuDropdown";
import { SearchAllProducts } from "./SearchBarAllProducts";
import { SectionLink } from "./SectionLink";
import { useState } from "react";
import { ShoppingCartButton } from "./ShoppingCartButton";
import { X } from "phosphor-react";
import { SearchProducts } from "./SearchProducts";

export function Header() {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [searchBar, setSearchBar] = useState("");

  const handleButtonClick = () => {
    setIsInputVisible((prevValue) => !prevValue);
    setSearchBar("");
  };

  const handleCloseInput = () => {
    setIsInputVisible(false);
    setSearchBar("");
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
            aria-label="Botão de procura de produtos da renove casa"
          />
          <X onClick={handleCloseInput} size={25} className="close-button" />
        </InputContainer>
      )}

      {searchBar && (
        <SearchProducts searchBar={searchBar} setSearchBar={setSearchBar} />
      )}
    </>
  );
}
