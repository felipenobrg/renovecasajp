import { NavLink } from "react-router-dom";
import { SectionContainer, SectionContent } from "./styles";
import { useState, useEffect } from "react";

export function SectionLink() {
  const [showSection, setShowSection] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowSection(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!showSection) {
    return null;
  }

  return (
    <SectionContainer>
      <SectionContent>
        <NavLink to={"/"}>Início</NavLink>
        <p>{"•"}</p>
        <NavLink to={"/sofaretro"}>Sofá Retrô</NavLink>
        <p>{"•"}</p>
        <NavLink to={"/sofaretratil"}>Sofá Retrátil</NavLink>
        <p>{"•"}</p>
        <NavLink to={"/sofaspopulares"}>Sofás Populares</NavLink>
        <p>{"•"}</p>
        <NavLink to={"/poltronas"}>Poltronas</NavLink>
        <p>{"•"}</p>
        <NavLink to={"/camas"}>Camas</NavLink>
        <p>{"•"}</p>
        <NavLink to={"/produtosvime"}>Produtos em Vime</NavLink>
        <p>{"•"}</p>
        <NavLink to={"/moveis"}>Móveis</NavLink>
        <p>{"•"}</p>
        <NavLink to={"/utilidades"}>Utilidades</NavLink>
      </SectionContent>
    </SectionContainer>
  );
}
