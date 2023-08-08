import { WhatsappLogo } from "phosphor-react";
import {
  CardContainer,
  CardContent,
  TitleCard,
  Price,
  MoneySign,
  OldPrice,
  ButtonCard,
  WornOut,
  Click,
} from "./styles";
import queryString from "query-string";
import { NavLink } from "react-router-dom";


export interface ProductCardProps {
  imgSrc: string;
  wornOut?: string;
  title: string;
  price: string;
  oldPrice: string;
  textForWhatsApp: string;
  productId: number;
  description?: string;
  key: number
}

export function ProductCard({
  imgSrc,
  title,
  price,
  oldPrice,
  textForWhatsApp,
  wornOut,
  productId,
}: ProductCardProps) {
  const handleWhatsAppClick = () => {
    const url = `https://api.whatsapp.com/send?${queryString.stringify({
      phone: "5583987663399",
      text: textForWhatsApp,
    })}`;
    window.open(url, "_blank");
  };

  let linkDestination 
  
  switch (true) {
    case location.pathname.includes("/sofaretro"):
      linkDestination = `/product/${productId}`;
      break;
    case location.pathname.includes("/sofaretratil"):
      linkDestination = `/product2/${productId}`;
      break;
    case location.pathname.includes("/sofaspopulares"):
      linkDestination = `/product3/${productId}`;
      break;
    case location.pathname.includes("/poltronas"):
      linkDestination = `/product4/${productId}`;
      break;
    case location.pathname.includes("/camas"):
      linkDestination = `/product5/${productId}`;
      break;
    case location.pathname.includes("/produtosvime"):
      linkDestination = `/product6/${productId}`;
      break;
    case location.pathname.includes("/moveis"):
      linkDestination = `/product7/${productId}`;
      break;
    case location.pathname.includes("/utilidades"):
      linkDestination = `/product8/${productId}`;
      break;
    default:
      linkDestination = `/product/${productId}`;
  }

  return ( 
    <CardContainer>
      <CardContent>
        <NavLink to={linkDestination}>
          <img loading="lazy" src={imgSrc} alt="" />
          <Click>Clique para saber mais</Click>
          {wornOut && <WornOut>{wornOut}</WornOut>}
          <TitleCard>{title}</TitleCard>
          <Price>
            <MoneySign>R$</MoneySign> {price} <OldPrice>R$ {oldPrice}</OldPrice>
          </Price>
          <ButtonCard onClick={handleWhatsAppClick}>
            <WhatsappLogo size={20} weight="fill" />
            COMPRAR
          </ButtonCard>
        </NavLink>
      </CardContent>
    </CardContainer>
  );
}
