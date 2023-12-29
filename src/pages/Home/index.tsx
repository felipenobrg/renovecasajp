import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ScrollUp } from "../../components/ScrollUp";
import { CardPhotos } from "./Components/CardPhotos";
import { Promotions } from "./Components/Promotions";
import { SectionAbout } from "./Components/SectionAbout";
import { WhoWeAre } from "./Components/WhoWeAre";

export function Home() {

  return (
    <>
      <Header/>
      <CardPhotos />
      <SectionAbout />
      <Promotions />
      <WhoWeAre />
      <ScrollUp />
      <Footer />
    </>
  )
}

