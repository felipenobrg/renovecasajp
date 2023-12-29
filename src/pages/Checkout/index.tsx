import { BuyWhatsAppButton } from "../../components/BuyWhatsAppButton";
import { Header } from "../../components/Header";
import { SectionLink } from "../../components/SectionLink";
import { useCart } from "../../context/CartContext";
import {
  CheckoutContainer,
  H1,
  ItemContainer,
  ItemInfo,
  WhatsAppButtonContainer,
} from "./styles";
import queryString from "query-string";

export const Checkout = () => {
  const { cart, formattedTotalPrice } = useCart();
  const handleWhatsAppClick = () => {
    const cartItemsText = cart
      .map((item) => `${item.title} R$ ${item.price} ` )
      .join("\n");
    const url = `https://api.whatsapp.com/send?${queryString.stringify({
      phone: "5583987663399",
      text: `Olá, gostaria de comprar os seguintes itens: \n${cartItemsText}\n-`,
    })}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Header />
      <SectionLink />
      <H1>Carrinho de Compras</H1>
      <CheckoutContainer>
        {cart.length > 0 ? (
          cart.map((item) => (
            <ItemContainer key={item.productId}>
              <img src={item.imgSrc} alt={item.title} />
              <ItemInfo>
                <p className="title">{item.title}</p>
                <p>R${item.price}</p>
              </ItemInfo>
            </ItemContainer>
          ))
        ) : (
          <H1>Carrinho vazio {":("} </H1>
        )}
        {cart.length > 0 && (
          <h1>
            Subtotal{" "}
            <span>
              ({cart.length} {cart.length !== 1 ? "itens" : "item"})
            </span>
            : {formattedTotalPrice} à vista
            <WhatsAppButtonContainer>
              <BuyWhatsAppButton
                handleButtonClick={handleWhatsAppClick}
                TextButton="FECHAR NO WHATSAPP"
              />
            </WhatsAppButtonContainer>
          </h1>
        )}

    
      </CheckoutContainer>
    </>
  );
};
