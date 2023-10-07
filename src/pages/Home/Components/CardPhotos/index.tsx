import { NavLink } from "react-router-dom";
import { CardPhotosContainer } from "./styles";

import SofaRetro from "../../../../assets/CardPhotos/SofaRetro.jpg"
import SofaRetratil from "../../../../assets/CardPhotos/SofaRetratil.jpg"
import SofasPopulares from "../../../../assets/CardPhotos/SofasPopulares.jpg"
import ProdutosEmVime from "../../../../assets/CardPhotos/ProdutosEmVime.jpg"

export function CardPhotos() {
    return (
        <CardPhotosContainer>
        <NavLink to={"/sofaretro"}>
        <img src={SofaRetro} alt="" />
        </NavLink>
        <NavLink to={"/sofaretratil"}>
        <img src={SofaRetratil} alt="" />
        </NavLink>
        <NavLink to={"/sofaspopulares"}>
        <img src={SofasPopulares} alt="" />
        </NavLink>
        <NavLink to={"/produtosvime"}>
        <img src={ProdutosEmVime} alt="" />
        </NavLink>
      </CardPhotosContainer>
    )
}
