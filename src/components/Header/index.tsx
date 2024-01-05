import { useState } from "react";
import { HeaderContainer, HeaderContent, OverlayContainer } from "./styles";
import LogoRenoveCasa from "../../assets/logoRenoveCasa.webp";
import { DropDownMenu } from "./MenuDropdown";
import { SearchAllProducts } from "./SearchBarAllProducts";
import { SectionLink } from "./SectionLink";
import { ShoppingCartButton } from "./ShoppingCartButton";
import { InputAllProducts } from "./InputAllProduct";
import { ResearchedProducts } from "./ResearchedProducts";

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
      <>
        {isInputVisible && (
          <InputAllProducts
            searchBar={searchBar}
            setSearchBar={setSearchBar}
            setIsInputVisible={setIsInputVisible}
          />
        )}
        {searchBar && (
          <ResearchedProducts
            searchBar={searchBar}
            setSearchBar={setSearchBar}
          />
        )}
      </>

      {isInputVisible && <OverlayContainer />}
    </>
  );
}
