import { ShoppingCart, Trash } from "phosphor-react";
import { BuyWhatsAppButton } from "../../components/BuyWhatsAppButton";
import { Header } from "../../components/Header";
import { useCart } from "../../context/CartContext";
import {
  CheckoutContainer,
  H1,
  ItemContainer,
  ItemInfo,
  ShoppingCartEmptyContainer,
  WhatsAppButtonContainer,
} from "./styles";
import queryString from "query-string";

export const Checkout = () => {
  const { cart, formattedTotalPrice, removeCart } = useCart();
  const handleWhatsAppClick = () => {
    const cartItemsText = cart
      .map((item) => `*${item.title}*\nPreço: R$ ${item.price}\n---`)
      .join("\n");
    const message = `Olá! Gostaria de comprar os seguintes itens:\n${cartItemsText}\n`;
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
        {cart.length > 0 ? (
          cart.map((item) => (
            <ItemContainer>
              <img src={item.imgSrc} alt={item.title} />
              <ItemInfo>
                <p className="title">{item.title}</p>
                <p>R${item.price} </p>
                <button onClick={() => removeCart(item)}>
                  Remover <Trash size={18} color="#000" />
                </button>
              </ItemInfo>
            </ItemContainer>
          ))
        ) : (
          <ShoppingCartEmptyContainer>
            <h2>
              {" "}
              <ShoppingCart size={30} /> Seu carrinho está vazio
            </h2>
            <p>
              Vá para a <a href="/">página inicial</a> ou procure no site os
              produtos que vão te deixar feliz. Quando encontrá-los, clique no
              botão adicionar à sacola
            </p>
          </ShoppingCartEmptyContainer>
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
