import { HeaderContainer, HeaderContent } from "./styles";
import LogoRenoveCasa from "../../assets/logoRenoveCasa.webp";
import { DropDownMenu } from "./MenuDropdown";
import { SearchAllProducts } from "./SearchBarAllProducts";
import { SectionLink } from "./SectionLink";
import { useState } from "react";
import { ShoppingCartButton } from "./ShoppingCartButton";
import { SearchProducts } from "./SearchProducts";
import { InputAllProducts } from "./InputAllProduct";

export function Header() {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [searchBar, setSearchBar] = useState("");

  const handleButtonClick = () => {
    setIsInputVisible((prevValue) => !prevValue);
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
        <InputAllProducts
          searchBar={searchBar}
          setSearchBar={setSearchBar}
          setIsInputVisible={setIsInputVisible}
        />
      )}

      {searchBar && (
        <SearchProducts searchBar={searchBar} setSearchBar={setSearchBar} />
      )}
    </>
  );
}
