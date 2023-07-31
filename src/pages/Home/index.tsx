import { CreditCard, ShieldCheck, Truck } from "phosphor-react";
import { AboutDelivery } from "../../components/AboutDelivery";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { SectionLink } from "../../components/SectionLink";
import { Carousel } from "./Components/Carousel";
import { SectionAbout } from "./styles";

export function Home() {
  return (
    <>
      <Header />
      <AboutDelivery />
      <SectionLink />
      <Carousel />
      <SectionAbout>
        <div>
        <h2> <Truck size={60} />Entrega para João Pessoa e Região</h2>
        </div>
        <div>
          <h2><CreditCard size={60} /> Trabalhamos com todos cartões</h2>
        </div>
        <div>
          <h2><ShieldCheck size={60} />3 Meses de Garantia em Estofados</h2>
        </div>
      </SectionAbout>
      <Footer />
    </>
  );
}
