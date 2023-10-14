import { AboutDelivery } from "../../components/AboutDelivery";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ScrollUp } from "../../components/ScrollUp";
import { SectionLink } from "../../components/SectionLink";
import { CardPhotos } from "./Components/CardPhotos";
import { Carousel } from "./Components/Carousel";
import { Promotions } from "./Components/Promotions";
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
          <SectionAbout />
          <Promotions />
          <WhoWeAre />
          <ScrollUp />
          <Footer />
        </>
      )}

