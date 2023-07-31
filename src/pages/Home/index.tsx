import { AboutDelivery } from "../../components/AboutDelivery";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { SectionLink } from "../../components/SectionLink";
import { CardPhotos } from "./Components/CardPhotos";
import { Carousel } from "./Components/Carousel";
import { SectionAbout } from "./Components/SectionAbout";
import { WhoWeAre } from "./Components/WhoWeAre";

export function Home() {
  return (
    <>
      <Header />
      <AboutDelivery />
      <SectionLink />
      <Carousel />
      <CardPhotos />

     <WhoWeAre />
      <SectionAbout />
      <Footer />
    </>
  );
}
