import { InstagramLogo } from "phosphor-react";
import { WhoWeAreContainer } from "./styles";

export function WhoWeAre() {
  return (
    <WhoWeAreContainer>
  <h1>Quem Somos?</h1>
<div>
  <h3>Loja de Móveis em João Pessoa: Online e Física</h3>
  <p>
    Visite nossa loja de móveis em João Pessoa e explore pessoalmente nossa
    ampla seleção de móveis. Se preferir, estamos disponíveis online, tornando
    suas compras simples e convenientes, a qualquer momento e de qualquer lugar.
  </p>
</div>

<div>
  <h3>Variedade de Estilos e Valores em Móveis</h3>
  <p>
    Em nossa loja, você encontrará móveis para todos os estilos de decoração e
    necessidades. Temos opções que se encaixam perfeitamente, desde estilos
    clássicos até os mais modernos e contemporâneos.
  </p>
</div>
<div>
  <h3>Móveis de Alta Qualidade a Preços Acessíveis em João Pessoa</h3>
  <p>
    Em busca de móveis de alta qualidade a preços acessíveis em João Pessoa?
    Você está no lugar certo! Somos especializados em oferecer uma ampla
    seleção de móveis de diversos estilos e preços, proporcionando conforto e
    estilo para o seu lar.
  </p>
</div>

      <p>
        <a href="https://www.instagram.com/renovecasajp/">
          <InstagramLogo size={30} color="#929292" />
        </a>
      </p>
    </WhoWeAreContainer>
  );
}
