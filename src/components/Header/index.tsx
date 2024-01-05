import { useState } from "react";
import { HeaderContainer, HeaderContent, OverlayContainer } from "./styles";
import LogoRenoveCasa from "../../assets/logoRenoveCasa.webp";
import { DropDownMenu } from "./components/MenuDropdown";
import { SearchAllProducts } from "./components/SearchBarAllProducts";
import { SectionLink } from "./components/SectionLink";
import { ShoppingCartButton } from "./components/ShoppingCartButton";
import { InputAllProducts } from "./components/InputAllProduct";
import { ResearchedProducts } from "./components/ResearchedProducts";

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
