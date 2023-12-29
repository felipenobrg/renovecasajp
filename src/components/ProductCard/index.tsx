import { NavLink, useLocation } from "react-router-dom";
import queryString from "query-string";
import {
  CardContainer,
  CardContent,
  TitleCard,
  Price,
  OldPrice,
  WornOut,
  CurrentPrice,
} from "./styles";
import { BuyWhatsAppButton } from "../BuyWhatsAppButton";
import { AddCartButton } from "../AddCartButton";
import { useCart } from "../../context/CartContext";

interface ProductCardProps {
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
  const { addToCart } = useCart();

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

  const handleAddToCart = () => {
    const product = {
      imgSrc,
      title,
      price,
      productId,
    };
    addToCart(product);
  };

  return (
    <CardContainer>
      <CardContent>
        <NavLink to={getLinkDestination()}>
          <img src={imgSrc} alt={title} loading="lazy" />
          {wornOut && <WornOut>{wornOut}</WornOut>}
          <TitleCard>{title}</TitleCard>
          <Price>
            <OldPrice>R$ {oldPrice}</OldPrice>
            <CurrentPrice>R$ {price}</CurrentPrice>
          </Price>
        </NavLink>
        <AddCartButton
          TextButton="ADICIONAR AO CARRINHO"
          handleAddToCart={handleAddToCart}
        />
        <BuyWhatsAppButton
          handleButtonClick={handleWhatsAppClick}
          TextButton="COMPRAR NO WHATSAPP"
        />
      </CardContent>
    </CardContainer>
  );
}
