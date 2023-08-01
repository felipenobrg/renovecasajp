import { FacebookLogo, InstagramLogo } from "phosphor-react";
import { WhoWeAreContainer } from "./styles";

export function WhoWeAre() {
  return (
    <WhoWeAreContainer>
      <h1>Quem Somos?</h1>
      <div>
        <h2>Móveis de Qualidade em João Pessoa | Loja Online e Física</h2>
        <p>
          Procurando móveis de alta qualidade a preços acessíveis em João
          Pessoa? Você encontrou o lugar certo! Somos uma loja especializada em
          oferecer uma ampla seleção de móveis de todos os estilos e valores,
          trazendo conforto e estilo para o seu lar.
        </p>
      </div>
      <div>
        <h2>Variedade de Estilos e Valores | Móveis com Personalidade</h2>
        <p>
          Na nossa loja, você encontrará móveis para todos os gostos e
          necessidades. Temos opções que se encaixam perfeitamente em diferentes
          estilos de decoração, desde os mais clássicos até os mais modernos e
          contemporâneos.
        </p>
      </div>
      <div>
        <h2>Visite nossa Loja Online ou Física em João Pessoa</h2>
        <p>
          Venha nos fazer uma visita em nossa loja física em João Pessoa para
          conferir de perto a nossa seleção de móveis. Se preferir, também
          estamos disponíveis online, facilitando suas compras a qualquer hora e
          lugar.
        </p>
      </div>

      <p>
        <a href="https://www.instagram.com/renovecasajp/">
          <InstagramLogo size={30} color="#929292" />
        </a>
        <a>
          <FacebookLogo size={30} />
        </a>
      </p>
    </WhoWeAreContainer>
  );
}
