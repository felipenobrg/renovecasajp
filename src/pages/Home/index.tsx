import { useState, useEffect } from "react";
import { AboutDelivery } from "../../components/AboutDelivery";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ScrollUp } from "../../components/ScrollUp";
import { SectionLink } from "../../components/SectionLink";
import { CardPhotos } from "./Components/CardPhotos";
import { Carousel } from "./Components/Carousel";
import { SectionAbout } from "./Components/SectionAbout";
import { WhoWeAre } from "./Components/WhoWeAre";
import { LoadingSpinner } from "../../components/LoadingSpinner";

export function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
      clearTimeout(delay);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Header />
          <AboutDelivery />
          <SectionLink />
          <Carousel />
          <CardPhotos />
          <SectionAbout />

          <WhoWeAre />
          <ScrollUp />
          <Footer />
        </>
      )}
    </>
  );
}
