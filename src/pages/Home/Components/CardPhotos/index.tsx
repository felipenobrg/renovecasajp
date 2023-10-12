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
        <img src={SofaRetro} alt="Sofa Retro" width="100%"  height="auto" />
      </NavLink>
      <NavLink to="/sofaretratil">
        <img src={SofaRetratil} alt="Sofa Retratil" width="100%"  height="auto"  />
      </NavLink>
      <NavLink to="/sofaspopulares">
        <img src={SofasPopulares} alt="Sofas Populares" width="100%"  height="auto"  />
      </NavLink>
      <NavLink to="/produtosvime">
        <img src={ProdutosEmVime} alt="Produtos em Vime" width="100%"  height="auto"  />
      </NavLink>
    </CardPhotosContainer>
  );
}