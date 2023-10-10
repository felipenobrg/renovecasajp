import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "../src/routes/routes";
import { GlobalStyle } from "./styles/global";
import { WhatsAppApiProvider } from "./context/WhatsAppApiContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <WhatsAppApiProvider>
          <Router />
        </WhatsAppApiProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
