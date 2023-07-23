import { GlobalStyle } from "../../styles/global";
import {
  DropdownButton,
  DropdownList,
  DropdownMenu,
  HeaderContainer,
  HeaderContent,
} from "./styles";
import LogoRenoveCasa from "../../assets/logoRenoveCasa.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <GlobalStyle />
      <HeaderContainer>
        <HeaderContent>
          <div>
            <DropdownButton open={isDropdownOpen} onClick={handleDropdownToggle}>
               <div className="icon"/>
            </DropdownButton>
            {isDropdownOpen && (
              <DropdownMenu open={isDropdownOpen}>
                <DropdownList>
                  <NavLink to={"/sofaretro"}>Sofá Retrô</NavLink>
                  <NavLink to={"/sofaretratil"}>Sofá Retrátil</NavLink>
                  <NavLink to={"/sofaspopulares"}>Sofás Populares</NavLink>
                  <NavLink to={"/poltronas"}>Poltronas</NavLink>
                  <NavLink to={"/camas"}>Camas</NavLink>
                  <NavLink to={"/produtosvime"}>Produtos em Vime</NavLink>
                  <NavLink to={"/moveis"}>Móveis</NavLink>
                  <NavLink to={"/utilidades"}>Utilidades</NavLink>
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
