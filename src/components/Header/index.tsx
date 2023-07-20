import { GlobalStyle } from "../../styles/global";
import { HeaderContainer, HeaderContent } from "./styles";
import LogoRenoveCasa from "../../assets/logoRenoveCasa.png";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <>
      <GlobalStyle />
      <HeaderContainer>
        <HeaderContent>
          <NavLink to={"/"}>
          <img src={LogoRenoveCasa} alt="" />
          </NavLink>
        </HeaderContent>
      </HeaderContainer>
    </>
  );
}
