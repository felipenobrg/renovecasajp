import { WhatsappLogo } from "phosphor-react";
import { CardContainer, CardContent, TitleCard, Price, MoneySign, OldPrice, ButtonCard, WornOut, Click } from "./styles";
import queryString from "query-string";
import { NavLink, useLocation } from "react-router-dom"; 
import { LazyLoadImage } from "react-lazy-load-image-component";

export interface ProductCardProps {
  imgSrc: string;
  wornOut?: string;
  title: string;
  price: string;
  oldPrice: string;
  textForWhatsApp: string;
  productId: number;
  description?: string;
  key: number;
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
  const location = useLocation(); 

  const handleWhatsAppClick = () => {
    const url = `https://api.whatsapp.com/send?${queryString.stringify({
      phone: "5583987663399",
      text: textForWhatsApp,
    })}`;
    window.open(url, "_blank");
  };

  const getLinkDestination = () => {
    switch (true) {
      case location.pathname.includes("/sofaretro"):
        return `/product/${productId}`;
      case location.pathname.includes("/sofaretratil"):
        return `/product2/${productId}`;
      case location.pathname.includes("/sofaspopulares"):
        return `/product3/${productId}`;
      case location.pathname.includes("/poltronas"):
        return `/product4/${productId}`;
      case location.pathname.includes("/camas"):
        return `/product5/${productId}`;
      case location.pathname.includes("/produtosvime"):
        return `/product6/${productId}`;
      case location.pathname.includes("/moveis"):
        return `/product7/${productId}`;
      case location.pathname.includes("/utilidades"):
        return `/product8/${productId}`;
      default:
        return `/product/${productId}`;
    }
  };

  return (
    <CardContainer>
      <CardContent>
        <NavLink to={getLinkDestination()}>
          <LazyLoadImage src={imgSrc} alt="" />
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
