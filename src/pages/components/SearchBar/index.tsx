import { MagnifyingGlass } from "phosphor-react";
import { SearchBarContainer } from "./styles";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <SearchBarContainer>
      <span>
        <MagnifyingGlass size={22} color="#888" />{" "}
      </span>{" "}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Pesquise pelo nome"
      />
    </SearchBarContainer>
  );
}
