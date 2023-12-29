import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Router } from "../src/routes/routes";
import { GlobalStyle } from "./styles/global";
import { WhatsAppApiProvider } from "./context/WhatsAppApiContext";
import { defaultTheme } from "./styles/themes/default";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <CartContextProvider>
          <WhatsAppApiProvider>
            <Router />
          </WhatsAppApiProvider>
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
