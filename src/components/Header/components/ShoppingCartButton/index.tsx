import { ShoppingCart } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../../context/CartContext";
import { ShoppingCartContainer } from "./styles";

export function ShoppingCartButton() {
  const { totalQuantity } = useCart();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/checkout");
  };
  return (
    <ShoppingCartContainer onClick={handleClick}>
      <ShoppingCart size={30} color="#ffff" />
      <span className="cart-count">{totalQuantity}</span>
    </ShoppingCartContainer>
  );
}
