import { GlobalStyle } from "../../styles/global";
import {
  DropdownButton,
  DropdownList,
  DropdownMenu,
  HeaderContainer,
  HeaderContent,
} from "./styles";
import LogoRenoveCasa from "../../../public/logoRenoveCasa.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { WhatsappLogo } from "phosphor-react";
import queryString from "query-string";

export function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const isSmallScreen = window.innerWidth < 768;

  function handleWhatsAppClick() {
    const url = `https://api.whatsapp.com/send?${queryString.stringify({
      phone: "5583987663399",
      text: "Olá. Me interessei pelos produtos",
    })}`;
    window.open(url, "_blank");
  }

  return (
    <>
      <GlobalStyle />
      <HeaderContainer>
        <HeaderContent>
          <div>
            {isSmallScreen ? (
              <DropdownButton
                open={isDropdownOpen}
                onClick={handleDropdownToggle}
              >
                <div className="icon" />
              </DropdownButton>
            ) : null}
            {isDropdownOpen && (
              <DropdownMenu open={isDropdownOpen}>
                <DropdownList>
                  <NavLink to={"/"}>Início</NavLink>
                  <NavLink to={"/sofaretro"}>Sofá Retrô </NavLink>
                  <NavLink to={"/sofaretratil"}>Sofá Retrátil</NavLink>
                  <NavLink to={"/sofaspopulares"}>Sofás Populares</NavLink>
                  <NavLink to={"/poltronas"}>Poltronas</NavLink>
                  <NavLink to={"/camas"}>Camas</NavLink>
                  <NavLink to={"/produtosvime"}>Produtos em Vime</NavLink>
                  <NavLink to={"/moveis"}>Móveis</NavLink>
                  <NavLink to={"/utilidades"}>Utilidades</NavLink>
                  <button onClick={handleWhatsAppClick}>
                    <WhatsappLogo size={20} />
                    Compre Via WhatsApp
                  </button>
                </DropdownList>
              </DropdownMenu>
            )}
          </div>

          <img src={LogoRenoveCasa} alt="" />
        </HeaderContent>
      </HeaderContainer>
    </>
  );
}
