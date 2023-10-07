import { NavLink } from "react-router-dom";
import { CardPhotosContainer } from "./styles";

import SofaRetro from "../../../../assets/CardPhotos/SofaRetro.jpg"
import SofaRetratil from "../../../../assets/CardPhotos/SofaRetratil.jpg"
import SofasPopulares from "../../../../assets/CardPhotos/SofasPopulares.jpg"
import ProdutosEmVime from "../../../../assets/CardPhotos/ProdutosEmVime.jpg"

export function CardPhotos() {
  return (
    <CardPhotosContainer>
      <NavLink to="/sofaretro">
        <img src={SofaRetro} alt="Sofa Retro" loading="lazy" />
      </NavLink>
      <NavLink to="/sofaretratil">
        <img src={SofaRetratil} alt="Sofa Retratil" loading="lazy" />
      </NavLink>
      <NavLink to="/sofaspopulares">
        <img src={SofasPopulares} alt="Sofas Populares" loading="lazy" />
      </NavLink>
      <NavLink to="/produtosvime">
        <img src={ProdutosEmVime} alt="Produtos em Vime" loading="lazy" />
      </NavLink>
    </CardPhotosContainer>
  );
}