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