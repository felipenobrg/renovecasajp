import { MagnifyingGlass } from "phosphor-react";
import { ButtonContainer } from "./styles";

interface SearchAllProductsProps {
  handleButtonClick: () => void;
}

export const SearchAllProducts = ({
  handleButtonClick,
}: SearchAllProductsProps) => {
  return (
    <ButtonContainer
      onClick={handleButtonClick}
      aria-label="Botão para ativar o campo para pesquisa de produtos"
    >
      <MagnifyingGlass color="#ffff" size={30} />
    </ButtonContainer>
  );
};
