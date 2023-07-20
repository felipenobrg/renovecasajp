import { WhatsappLogo } from "phosphor-react";
import { CardContainer, CardContent, TitleCard, Price, MoneySign, OldPrice, ButtonCard } from "./styles";

interface ProductCardProps {
  imgSrc: string;
  title: string;
  price: string;
  oldPrice: string;
}

export function ProductCard({ imgSrc, title, price, oldPrice}: ProductCardProps) {
  
    return (
        <CardContainer>
        <CardContent>
          <img src={imgSrc} alt="" />
          <TitleCard>{title}</TitleCard>
          <Price><MoneySign>R$</MoneySign> {price} <OldPrice>R$ {oldPrice}</OldPrice></Price>
          <ButtonCard><WhatsappLogo size={20} weight="fill" />COMPRAR</ButtonCard>
        </CardContent>
        </CardContainer>
    )
}

