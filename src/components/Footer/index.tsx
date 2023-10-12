import {
  AboutRenoveContainer,
  DevelopedBy,
  FooterContainer,
  GridContainer,
  ImagesContainer,
  PaymentMethodsContainer,
  ServiceContainer,
} from "./styles";
import RenoveCasaLogo from "../../assets/logoRenoveCasa.webp";
import { Phone, WhatsappLogo } from "phosphor-react";
import masterCard from "../../assets/CardPayment/masterCard.webp";
import eloCard from "../../assets/CardPayment/eloCard.webp";
import pix from "../../assets/CardPayment/pix.webp";
import visaCard from "../../assets/CardPayment/visaCard.webp";
import hiperCard from "../../assets/CardPayment/hiperCard.webp";

export function Footer() {
  return (
    <FooterContainer>
      <GridContainer>
        <AboutRenoveContainer>
          <img src={RenoveCasaLogo} alt="Renove Casa Logo" />
          <p>
            Melhor loja de móveis da Paraíba, Com as melhores ofertas, preços e
            qualidade, com entrega imediata para João Pessoa e região!
          </p>
        </AboutRenoveContainer>
        <ServiceContainer>
          <h3>ATENDIMENTO</h3>
          <div>
            <p>
              <Phone size={25} />
              Compre por Telefone
            </p>
            <p>
              <strong>(83) 98766-3399</strong>
            </p>
          </div>
          <div>
            <p>
              <WhatsappLogo size={25} />
              Fale no WhatsApp
            </p>
            <p>
              <strong>(83) 98766-3399</strong>
            </p>
          </div>
        </ServiceContainer>
        <PaymentMethodsContainer>
          <h3>Formas de Pagamento</h3>
          <ImagesContainer>
            <img src={pix} alt="" />
            <img src={masterCard} alt="" />
            <img src={eloCard} alt="" />
            <img src={visaCard} alt="" />
            <img src={hiperCard} alt="" />
          </ImagesContainer>
        </PaymentMethodsContainer>
      </GridContainer>
      <div className="horizontal-line"></div>
      <DevelopedBy>
        <p>
          Desenvolvido por{" "}
          <a href="https://portfolio-felipenobrega.vercel.app/">
            Felipe Nóbrega
          </a>
          <br />
          Contato: 83 98766-3399
        </p>
        <p>© {new Date().getFullYear()} Todos Direitos Reservados.</p>
      </DevelopedBy>
    </FooterContainer>
  );
}
