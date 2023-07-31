import { FacebookLogo, InstagramLogo } from "phosphor-react";
import { WhoWeAreContainer } from "./styles";

export function WhoWeAre() {
    return (
        <WhoWeAreContainer>
        <h1>Quem Somos?</h1>
        <p>
          Na Renove Casa, estamos apaixonados por tornar a sua casa um lugar
          acolhedor, bonito e confortável, sem pesar no seu bolso. Nossa loja é
          especializada em oferecer móveis de alta qualidade a preços
          incrivelmente acessíveis.{" "}
        </p>
        <p>
          Acreditamos que um lar bem decorado e funcional deve estar ao alcance
          de todos. Por isso, trabalhamos diretamente com os melhores
          fabricantes, garantindo que os produtos cheguem diretamente da fábrica
          para a sua casa, sem intermediários.
        </p>
        <p>
        <a href="https://www.instagram.com/renovecasajp/" ><InstagramLogo size={30} color="#929292" /></a> 
        <a><FacebookLogo size={30}/></a>
        </p>

      </WhoWeAreContainer>
    )
}