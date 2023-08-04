import { WhatsappLogo } from "phosphor-react";
import { CardContainer, CardContent, TitleCard, Price, MoneySign, OldPrice, ButtonCard, WornOut } from "./styles";
import queryString from 'query-string';

interface ProductCardProps {
  imgSrc: string;
  wornOut?: string;
  title: string;
  price: string;
  oldPrice: string;
  textForWhatsApp: string;
}

export function ProductCard({ imgSrc, title, price, oldPrice, textForWhatsApp, wornOut }: ProductCardProps) {
  const handleWhatsAppClick = () => {
    const url = `https://api.whatsapp.com/send?${queryString.stringify({
      phone: '5583987663399',
      text: textForWhatsApp,
    })}`;
    window.open(url, '_blank');
  };
    return (
        <CardContainer>
        <CardContent>
        <img loading="lazy" src={imgSrc} alt=""/>
          {wornOut && <WornOut>{wornOut}</WornOut>}
          <TitleCard>{title}</TitleCard>
          <Price><MoneySign>R$</MoneySign> {price} <OldPrice>R$ {oldPrice}</OldPrice></Price>
          <ButtonCard onClick={handleWhatsAppClick} ><WhatsappLogo size={20} weight="fill" />COMPRAR</ButtonCard>
        </CardContent>
        </CardContainer>
    )
}

