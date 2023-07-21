import { GlobalStyle } from "../../styles/global";
import { HeaderContainer, HeaderContent } from "./styles";
import LogoRenoveCasa from "../../assets/logoRenoveCasa.png";

export function Header() {
  return (
    <>
      <GlobalStyle />
      <HeaderContainer>
        <HeaderContent>
            <img src={LogoRenoveCasa} alt="" />
        </HeaderContent>
      </HeaderContainer>
    </>
  );
}
