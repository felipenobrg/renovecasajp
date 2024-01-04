import { Plus, Minus, Trash } from "phosphor-react";
import { ButtonsContainer } from "../../styles";
import { ItemContainer, ItemInfo } from "./styles";
import { useCart } from "../../../../context/CartContext";

export function ProductCart() {
    const {
        cart,
        removeCart,
        changeCartQuantity,
      } = useCart();

    return (
        cart.map((item) => (
            <ItemContainer>
              <img src={item.imgSrc} alt={item.title} />
              <ItemInfo>
                <p className="title">{item.title}</p>
                <p>R${item.price}</p>
                <ButtonsContainer>
                  <button onClick={() => changeCartQuantity(item, "plus")}>
                    <Plus />
                  </button>
                  <p>{item.quantity}</p>
                  <button onClick={() => changeCartQuantity(item, "minus")}>
                    <Minus />
                  </button>
                </ButtonsContainer>
                <button onClick={() => removeCart(item)} className="remove-button">
                  Remover <Trash size={18} color="#000" />
                </button>
              </ItemInfo>
            </ItemContainer>
        )
    )
)}