import { NavLink } from "react-router-dom";
import { Header } from "../../components/Header";
import { Truck } from "phosphor-react";
import { DeliveryContent, SectionContainer, SectionContent } from "./styles";
import { Carousel } from "./Components/Carousel";

export function Home() {
  return (
    <>
      <Header />
      <DeliveryContent>
        <Truck size={24} /> Oferecemos frete em toda João Pessoa e Região*
      </DeliveryContent>
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
 
       <Carousel />
    
   
    </>
  );
}
