import { ShoppingCart } from "phosphor-react";
import { AddCartButtonContainer, AddCartButtonStyle } from "./styles";

interface AddCartButtonProps {
  TextButton: string;
  handleAddToCart: () => void;
}

export function AddCartButton({
  TextButton,
  handleAddToCart,
}: AddCartButtonProps) {
  const handleClick = () => {
    handleAddToCart();
  };

  return (
    <AddCartButtonContainer onClick={handleClick}>
      <AddCartButtonStyle><ShoppingCart size={22} />{TextButton}</AddCartButtonStyle>
    </AddCartButtonContainer>
  );
}
