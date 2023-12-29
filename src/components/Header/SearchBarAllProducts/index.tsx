import { MagnifyingGlass } from "phosphor-react";
import { ButtonContainer } from "./styles";

interface SearchAllProductsProps {
  handleButtonClick: () => void
}

export const SearchAllProducts = ({ handleButtonClick }: SearchAllProductsProps) => {
  return (
    <>
      <ButtonContainer onClick={handleButtonClick}>
        <MagnifyingGlass color="#ffff" size={30}/>
      </ButtonContainer>
    </>
  );
};
