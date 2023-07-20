import { NavLink } from "react-router-dom";
import { SectionContainer, SectionContent } from "./styles";

export function SectionLink() {
    return (
        <SectionContainer>
        <SectionContent>
          <NavLink to={"/sofaretro"}> Sofá Retrô</NavLink>
          <p>{"•"}</p> 
          <NavLink to={"/sofaretratil"}>Sofá Retrátil</NavLink>
          <p>{"•"}</p>
          <NavLink to={"/sofapopulares"}>Sofás Populares</NavLink>
          <p>{"•"}</p>
          <NavLink to={"/poltronas"}>Poltronas</NavLink>
          <p>{"•"}</p>
          <NavLink to={"/camas"}>Camas</NavLink>
          <p>{"•"}</p>
          <NavLink to={"/produtosvine"}>Produtos em Vime</NavLink>
          <p>{"•"}</p>
          <NavLink to={"/moveis"}>Móveis</NavLink>
          <p>{"•"}</p>
          <NavLink to={"/utilidades"}>Utilidades</NavLink>
        </SectionContent>
      </SectionContainer>
    )
}