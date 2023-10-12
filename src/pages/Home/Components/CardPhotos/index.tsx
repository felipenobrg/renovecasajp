import { NavLink } from "react-router-dom";
import { CardPhotosContainer } from "./styles";

import SofaRetro from "../../../../assets/CardPhotos/SofaRetro.webp"
import SofaRetratil from "../../../../assets/CardPhotos/SofaRetratil.webp"
import SofasPopulares from "../../../../assets/CardPhotos/SofasPopulares.webp"
import ProdutosEmVime from "../../../../assets/CardPhotos/ProdutosEmVime.webp"

export function CardPhotos() {
  return (
    <CardPhotosContainer>
      <NavLink to="/sofaretro">
        <img src={SofaRetro} alt="Sofa Retro" />
      </NavLink>
      <NavLink to="/sofaretratil">
        <img src={SofaRetratil} alt="Sofa Retratil" />
      </NavLink>
      <NavLink to="/sofaspopulares">
        <img src={SofasPopulares} alt="Sofas Populares" />
      </NavLink>
      <NavLink to="/produtosvime">
        <img src={ProdutosEmVime} alt="Produtos em Vime" />
      </NavLink>
    </CardPhotosContainer>
  );
}