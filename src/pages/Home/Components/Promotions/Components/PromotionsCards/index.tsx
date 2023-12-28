import { Star } from "phosphor-react";
import { CardContainer, CardContent, Emphasis, MoneySign, OldPrice, Price, PromotionsContainer, TitleCard } from "./styles";
import queryString from "query-string";
import { BuyWhatsAppButton } from "../../../../../../components/BuyWhatsAppButton";


interface PromotionsCardsProps {
    imgSrc: string;
    productTitle: string;
    price: string;
    oldPrice: string;
    textForWhatsApp: string;
}

export function PromotionsCards({imgSrc, productTitle, price, oldPrice, textForWhatsApp}: PromotionsCardsProps) {
  const handleWhatsAppClick = () => {
    const url = `https://api.whatsapp.com/send?${queryString.stringify({
      phone: "5583987663399",
      text: textForWhatsApp,
    })}`;
    window.open(url, "_blank");
  };

  return (
    <PromotionsContainer>
      <CardContainer>
        <CardContent>
          <img src={imgSrc} alt={productTitle} loading="lazy" />
          <Emphasis>
            <Star size={15} color="#Eead2d" weight="fill" />
            <Star size={15} color="#Eead2d" weight="fill" />
            <Star size={15} color="#Eead2d" weight="fill" />
            <Star size={15} color="#Eead2d" weight="fill" />
            <Star size={15} color="#Eead2d" weight="fill" />
          </Emphasis>
          <TitleCard>{productTitle}</TitleCard>
          <Price>
            <MoneySign>R$</MoneySign> {price} <OldPrice>{oldPrice}</OldPrice>
          </Price>
          <BuyWhatsAppButton handleButtonClick={handleWhatsAppClick} TextButton={"COMPRAR"}  />
        </CardContent>
      </CardContainer>
    </PromotionsContainer>
  );
}
