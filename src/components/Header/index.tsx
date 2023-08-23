import { GlobalStyle } from "../../styles/global";
import {
  HeaderContainer,
  HeaderContent,
} from "./styles";
import LogoRenoveCasa from "../../assets/logoRenoveCasa.png";
import { DropDownMenu } from "./MenuDropdown";

export function Header() {
  return (
    <>
      <GlobalStyle />
      <HeaderContainer>
        <HeaderContent>
        <DropDownMenu />
          <img src={LogoRenoveCasa} alt="" />
        </HeaderContent>
      </HeaderContainer>
    </>
  );
}
