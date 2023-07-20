import { WhatsappLogo } from "phosphor-react";
import { CardContainer, CardContent, TitleCard, Price, MoneySign, OldPrice, ButtonCard } from "./styles";
import Photo1 from "../../assets/CarouselImages/Carousel2.jpg"

export function ProductCard() {
    return (
        <CardContainer>
        <CardContent>
          <img src={Photo1} alt="" />
          <TitleCard>Sofá Retrô</TitleCard>
          <Price><MoneySign>R$</MoneySign> 949,99 <OldPrice>R$ 999,99</OldPrice></Price>
          <ButtonCard><WhatsappLogo size={20} weight="fill" />COMPRAR</ButtonCard>
        </CardContent>
        </CardContainer>
    )
}

