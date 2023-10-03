import { Truck, CreditCard, ShieldCheck } from "phosphor-react";
import { SectionAboutContainer } from "./styles";

export function SectionAbout() {
  return (
    <SectionAboutContainer>
      <div>
        <Truck size={50} />
        <p> <span>Entrega</span> <br /> para João Pessoa e Região</p>
      </div>
      <div>
        <CreditCard size={50} />
        <p><span>Pague com cartão</span> <br /> em até 12x</p>
      </div>
      <div>
        <ShieldCheck size={50} />
        <p><span>Compra Segura</span> <br /> privacidade e segurança</p>
      </div>
    </SectionAboutContainer>
  );
}
