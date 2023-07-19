import { GlobalStyle } from "../../styles/global";
import { HeaderContainer, HeaderContent } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <GlobalStyle />
        <h1>Renove Casa</h1>
      </HeaderContent>
    </HeaderContainer>
  );
}
