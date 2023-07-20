import { Header } from "../../components/Header";
import { Truck } from "phosphor-react";
import { DeliveryContent } from "./styles";
import { Carousel } from "./Components/Carousel";
import { SectionLink } from "./Components/SectionLink";

export function Home() {
  return (
    <>
      <Header />
      <DeliveryContent>
        <Truck size={24} /> Oferecemos frete em toda João Pessoa e Região*
      </DeliveryContent>

      <SectionLink />

      <Carousel />
    </>
  );
}
