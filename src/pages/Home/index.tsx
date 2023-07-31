import { AboutDelivery } from "../../components/AboutDelivery";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { SectionLink } from "../../components/SectionLink";
import { Carousel } from "./Components/Carousel";
import { SectionAbout } from "./Components/SectionAbout";

import SofaPopulares from "../../assets/CardPhotos/SofasPopulares.jpg";
import SofaRetro from "../../assets/CardPhotos/SofaRetro.jpg";
import SofaRetratil from "../../assets/CardPhotos/SofaRetratil.jpg";
import ProdutosEmVime from "../../assets/CardPhotos/ProdutosEmVime.jpg";
import { CardPhotos } from "./styles";
import { NavLink } from "react-router-dom";


export function Home() {
  return (
    <>
      <Header />
      <AboutDelivery />
      <SectionLink />
      <Carousel />
      <CardPhotos>
        <NavLink to={"/sofaretro"}>
        <img src={SofaRetro} alt="" />
        </NavLink>
        <NavLink to={"/sofaretratil"}>
        <img src={SofaRetratil} alt="" />
        </NavLink>
        <NavLink to={"/sofaspopulares"}>
        <img src={SofaPopulares} alt="" />
        </NavLink>
        <NavLink to={"/produtosemvime"}>
        <img src={ProdutosEmVime} alt="" />
        </NavLink>
      </CardPhotos>
      <SectionAbout />
      <Footer />
    </>
  );
}
