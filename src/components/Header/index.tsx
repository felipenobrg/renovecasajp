import { GlobalStyle } from "../../styles/global";
import {
  HeaderContainer,
  HeaderContent,
} from "./styles";
import LogoRenoveCasa from "../../assets/logoRenoveCasa.webp";
import { DropDownMenu } from "./MenuDropdown";

export function Header() {
  return (
    <>
      <GlobalStyle />
      <HeaderContainer>
        <HeaderContent>
        <DropDownMenu />
          <img src={LogoRenoveCasa} alt="Renove Casa Logotipo" width="350" height="auto" />
        </HeaderContent>
      </HeaderContainer>
    </>
  );
}
