import { Truck, CreditCard, ShieldCheck } from "phosphor-react";
import { SectionAboutContainer } from "./styles";

export function SectionAbout() {
  return (
    <SectionAboutContainer>
      <div>
        <h2>
          {" "}
          <Truck size={60} />
          Entrega para João Pessoa e Região
        </h2>
      </div>
      <div>
        <h2>
          <CreditCard size={60} /> Trabalhamos com todos cartões
        </h2>
      </div>
      <div>
        <h2>
          <ShieldCheck size={60} />3 Meses de Garantia em Estofados
        </h2>
      </div>
    </SectionAboutContainer>
  );
}
