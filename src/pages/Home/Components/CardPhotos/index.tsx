import { NavLink } from "react-router-dom";
import { CardPhotosContainer } from "./styles";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import SofaRetro from "../../../../assets/CardPhotos/SofaRetro.jpg"
import SofaRetratil from "../../../../assets/CardPhotos/SofaRetratil.jpg"
import SofasPopulares from "../../../../assets/CardPhotos/SofasPopulares.jpg"
import ProdutosEmVime from "../../../../assets/CardPhotos/ProdutosEmVime.jpg"

export function CardPhotos() {
    return (
        <CardPhotosContainer>
        <NavLink to={"/sofaretro"}>
        <LazyLoadImage src={SofaRetro} alt="" />
        </NavLink>
        <NavLink to={"/sofaretratil"}>
        <LazyLoadImage src={SofaRetratil} alt="" />
        </NavLink>
        <NavLink to={"/sofaspopulares"}>
        <LazyLoadImage src={SofasPopulares} alt="" />
        </NavLink>
        <NavLink to={"/produtosvime"}>
        <LazyLoadImage src={ProdutosEmVime} alt="" />
        </NavLink>
      </CardPhotosContainer>
    )
}
