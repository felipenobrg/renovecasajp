import { BuyWhatsAppButton } from "../../components/BuyWhatsAppButton";
import { Header } from "../../components/Header";
import { useCart } from "../../context/CartContext";
import {
  CheckoutContainer,
  H1,
  TotalAmountContainer,
  WhatsAppButtonContainer,
} from "./styles";
import queryString from "query-string";
import { ProductCart } from "./components/ProductCart";
import { EmptyCartText } from "./components/EmptyCartText";

export const Checkout = () => {
  const {
    cart,
    formattedTotalPrice,

    totalQuantity,
  } = useCart();
  const handleWhatsAppClick = () => {
    const cartItemsText = cart
      .map(
        (item) =>
          `*${item.quantity}x ${item.title}*\nPreço unitário: R$ ${item.price}\n`
      )
      .join("\n");

    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce(
      (acc, item) => acc + parseFloat(item.price) * item.quantity,
      0
    );

    const formattedTotalPrice = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(totalPrice);

    const message = `Olá! Gostaria de comprar ${totalQuantity} ${
      totalQuantity !== 1 ? "itens" : "item"
    }:\n${cartItemsText}\n*Total:* ${formattedTotalPrice}\n`;

    const url = `https://api.whatsapp.com/send?${queryString.stringify({
      phone: "5583987663399",
      text: message,
    })}`;

    window.open(url, "_blank");
  };
  return (
    <>
      <Header />
      <H1>Carrinho de Compras</H1>
      <CheckoutContainer>
        {cart.length > 0 ? <ProductCart /> : <EmptyCartText />}
        {totalQuantity > 0 && (
          <>
            <TotalAmountContainer>
              <h1>
                Subtotal{" "}
                <span>
                  ({totalQuantity} {totalQuantity > 1 ? "itens" : "item"})
                </span>
                : {formattedTotalPrice} à vista
              </h1>
            </TotalAmountContainer>
            <WhatsAppButtonContainer>
              <BuyWhatsAppButton
                handleButtonClick={handleWhatsAppClick}
                TextButton="FECHAR NO WHATSAPP"
              />
            </WhatsAppButtonContainer>
          </>
        )}
      </CheckoutContainer>
    </>
  );
};
