import { Truck } from "phosphor-react";
import { Header } from "../../components/Header";
import { SectionLink } from "../Home/Components/SectionLink";
import { DeliveryContent } from "../Home/styles";

export function Moveis() {
  return (
    <>
      <Header />
      <DeliveryContent>
        <Truck size={24} /> Oferecemos frete em toda João Pessoa e Região*
      </DeliveryContent>

      <SectionLink />
    </>
  );
}
