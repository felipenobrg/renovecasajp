import { X } from "phosphor-react";
import { NavLink } from "react-router-dom";
import {
  DropdownButton,
  DropdownMenu,
  DropdownList,
  CloseButton,
  WhatsAppButtonContainer,
} from "./styles";
import queryString from "query-string";
import { useState } from "react";
import { BuyWhatsAppButton } from "../../../BuyWhatsAppButton";

export function DropDownMenu() {
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

  function handleCloseDropdown() {
    setDropdownOpen(false);
  }

  return (
    <div>
      {isSmallScreen ? (
        <DropdownButton
          open={isDropdownOpen}
          onClick={handleDropdownToggle}
          className="dropdownButton"
          aria-label="Clique para ver as páginas"
        >
          <div className="icon" />
        </DropdownButton>
      ) : null}
      {isDropdownOpen && (
        <DropdownMenu open={isDropdownOpen}>
          <DropdownList>
            <CloseButton onClick={handleCloseDropdown}>
              <X color="#000" size={23} />
            </CloseButton>
            <NavLink to={"/"}>Início</NavLink>
            <NavLink to={"/sofaretro"}>Sofá Retrô</NavLink>
            <NavLink to={"/sofaretratil"}>Sofá Retrátil</NavLink>
            <NavLink to={"/sofaspopulares"}>Sofás Populares</NavLink>
            <NavLink to={"/poltronas"}>Poltronas</NavLink>
            <NavLink to={"/camas"}>Camas</NavLink>
            <NavLink to={"/produtosvime"}>Produtos em Vime</NavLink>
            <NavLink to={"/moveis"}>Móveis</NavLink>
            <NavLink to={"/utilidades"}>Utilidades</NavLink>

            <WhatsAppButtonContainer>
            <BuyWhatsAppButton
              TextButton="COMPRE VIA WHATSAPP"
              handleButtonClick={handleWhatsAppClick}
              aria-label="Compre Via WhatsApp"
            />
            </WhatsAppButtonContainer>
          </DropdownList>
        </DropdownMenu>
      )}
    </div>
  );
}
