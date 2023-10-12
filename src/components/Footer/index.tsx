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
            <img src={pix} alt="Logotipo do Pix" height="48" width="48" />
            <img src={masterCard} alt="Logotipo do Mastercard"  height="48" width="48" />
            <img src={eloCard} alt="Logotipo do Elocard"  height="48" width="48" />
            <img src={visaCard} alt="Logotipo do Visacard"  height="48" width="48" />
            <img src={hiperCard} alt="Logotipo do Hipercard"  height="48" width="48" />
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
