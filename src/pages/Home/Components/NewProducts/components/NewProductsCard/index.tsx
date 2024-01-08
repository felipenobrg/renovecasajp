import { Star } from "phosphor-react";
import {
  CardContainer,
  CardContent,
  Emphasis,
  NewProductContainer,
  OldPrice,
  Price,
  TitleCard,
} from "./styles";
import queryString from "query-string";
import { BuyWhatsAppButton } from "../../../../../../components/BuyWhatsAppButton";

interface NewProductsCardsProps {
  imgSrc: string;
  productTitle: string;
  price: string;
  oldPrice: string;
  textForWhatsApp: string;
}

export function NewProductsCards({
  imgSrc,
  productTitle,
  price,
  oldPrice,
  textForWhatsApp,
}: NewProductsCardsProps) {
  const handleWhatsAppClick = () => {
    const url = `https://api.whatsapp.com/send?${queryString.stringify({
      phone: "5583987663399",
      text: textForWhatsApp,
    })}`;
    window.open(url, "_blank");
  };

  return (
    <NewProductContainer>
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
            <OldPrice>R$ {oldPrice}</OldPrice> R$ {price}
          </Price>
          <BuyWhatsAppButton
            handleButtonClick={handleWhatsAppClick}
            TextButton={"COMPRAR"}
          />
        </CardContent>
      </CardContainer>
    </NewProductContainer>
  );
}
