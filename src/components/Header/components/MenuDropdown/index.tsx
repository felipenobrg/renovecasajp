import { CaretRight, XCircle } from "phosphor-react";
import {
  DropdownButton,
  DropdownMenu,
  DropdownList,
  CloseButton,
  StyledNavLink,
  NavLinkContent,
} from "./styles";
import { useState } from "react";
import { OverlayContainer } from "../../styles";

export function DropDownMenu() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const isSmallScreen = window.innerWidth < 768;

  function handleCloseDropdown() {
    setDropdownOpen(false);
  }

  return (
    <div>
      {isSmallScreen ? (
        <>
          <DropdownButton
            open={isDropdownOpen}
            onClick={handleDropdownToggle}
            className="dropdownButton"
            aria-label="Clique para ver as páginas"
          >
            <div className="icon" />
          </DropdownButton>
        </>
      ) : null}
      {isDropdownOpen && (
        <>
          <OverlayContainer onClick={handleCloseDropdown} />
          <DropdownMenu open={isDropdownOpen}>
            <DropdownList>
              <div className="header-container">
                <div className="header-content">
                  <p>
                    <a href="/checkout">Ir ao Carrinho de Compras</a>
                  </p>
                  <CloseButton onClick={handleCloseDropdown}>
                    <XCircle color="#000" size={30} />
                  </CloseButton>
                </div>
                <div className="line"></div>
              </div>
              <StyledNavLink to={"/"}>
                <NavLinkContent className="start">
                  Início
                  <CaretRight size={18} />
                </NavLinkContent>
              </StyledNavLink>
              <StyledNavLink to={"/sofaretro"}>
                <NavLinkContent>
                  Sofá Retrô
                  <CaretRight size={18} />
                </NavLinkContent>
              </StyledNavLink>
              <StyledNavLink to={"/sofaretratil"}>
                <NavLinkContent>
                  Sofá Retrátil
                  <CaretRight size={18} />
                </NavLinkContent>
              </StyledNavLink>
              <StyledNavLink to={"/sofaspopulares"}>
                <NavLinkContent>
                  Sofás Populares
                  <CaretRight size={18} />
                </NavLinkContent>
              </StyledNavLink>
              <StyledNavLink to={"/poltronas"}>
                <NavLinkContent>
                  Poltronas
                  <CaretRight size={18} />
                </NavLinkContent>
              </StyledNavLink>
              <StyledNavLink to={"/camas"}>
                <NavLinkContent>
                  Camas
                  <CaretRight size={18} />
                </NavLinkContent>
              </StyledNavLink>
              <StyledNavLink to={"/produtosvime"}>
                <NavLinkContent>
                  Produtos em Vime
                  <CaretRight size={18} />
                </NavLinkContent>
              </StyledNavLink>
              <StyledNavLink to={"/moveis"}>
                <NavLinkContent>
                  Móveis
                  <CaretRight size={18} />
                </NavLinkContent>
              </StyledNavLink>
              <StyledNavLink to={"/utilidades"}>
                <NavLinkContent>
                  Utilidades
                  <CaretRight size={18} />
                </NavLinkContent>
              </StyledNavLink>
            </DropdownList>
          </DropdownMenu>
        </>
      )}
    </div>
  );
}
