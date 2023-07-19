import { NavLink } from "react-router-dom";
import { Header } from "../../components/Header";
import { SectionContainer } from "./styles";

export function Home() {
    return (
        <>
        <Header />
        <SectionContainer>
            <div>
            <NavLink to={"/"}>Sofá Retro</NavLink>
            <div>Sofá Retrátil</div>
            <div>Sofás Populares</div>
            <div>Poltronas</div>
            <div>Camas</div>
            <div>Produtos em Vine</div>
            <div>Móveis</div>
            <div>Utilidades</div>
            </div>
        </SectionContainer>
        </>
        
    )
}