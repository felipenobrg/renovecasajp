import { Header } from "../../components/Header";
import { Carousel } from "./Components/Carousel";
import { SectionLink } from "./Components/SectionLink";
import { AboutDelivery } from "./Components/AboutDelivery";

export function Home() {
  return (
    <>
      <Header />
      
      <AboutDelivery />

      <SectionLink />

      <Carousel />
    </>
  );
}
