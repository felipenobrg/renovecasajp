import { X } from "phosphor-react";
import { InputContainer } from "./styles";
interface InputAllProductsProps {
  setSearchBar: (value: string) => void;
  searchBar: string;
  setIsInputVisible: (isVisible: boolean) => void;
}

export function InputAllProducts({
  setSearchBar,
  searchBar,
  setIsInputVisible,
}: InputAllProductsProps) {
  const handleCloseInput = () => {
    setIsInputVisible(false);
    setSearchBar("");
  };
  return (
    <InputContainer>
      <input
        type="text"
        placeholder="Olá, o que você procura?"
        onChange={(e) => setSearchBar(e.target.value)}
        value={searchBar}
        aria-label="Botão de pesquisa de produtos da renove casa"
      />
      <X onClick={handleCloseInput} size={25} className="close-button" />
    </InputContainer>
  );
}
