import { NavLink } from "react-router-dom";
import { Header } from "../../components/Header";
import { SectionContainer } from "./styles";

export function Home() {
    return (
        <>
        <Header />
        <SectionContainer>
            <div>
            <NavLink to={"/sofaretro"}>Sofá Retro</NavLink>
            <NavLink to={"/sofaretratil"}>Sofá Retrátil</NavLink>
            <NavLink to={"/sofapopulares"}>Sofás Populares</NavLink>
            <NavLink  to={"/poltronas"}>Poltronas</NavLink>
            <NavLink  to={"/camas"}>Camas</NavLink>
            <NavLink  to={"/produtosvine"}>Produtos em Vine</NavLink>
            <NavLink  to={"/moveis"}>Móveis</NavLink>
            <NavLink  to={"/utilidades"}>Utilidades</NavLink>
            </div>
        </SectionContainer>
        </>
        
    )
}