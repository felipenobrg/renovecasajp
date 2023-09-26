import { NavLink } from "react-router-dom";
import { SectionContainer, SectionContent } from "./styles";

export function SectionLink() {
  return (
    <SectionContainer>
      <SectionContent>
        <NavLink to={"/"}>Início</NavLink>
        <NavLink to={"/sofaretro"}>Sofá Retrô</NavLink>
        <NavLink to={"/sofaretratil"}>Sofá Retrátil</NavLink>
        <NavLink to={"/sofaspopulares"}>Sofás Populares</NavLink>
        <NavLink to={"/poltronas"}>Poltronas</NavLink>
        <NavLink to={"/camas"}>Camas</NavLink>
        <NavLink to={"/produtosvime"}>Produtos em Vime</NavLink>
        <NavLink to={"/moveis"}>Móveis</NavLink>
        <NavLink to={"/utilidades"}>Utilidades</NavLink>
      </SectionContent>
    </SectionContainer>
  );
}
