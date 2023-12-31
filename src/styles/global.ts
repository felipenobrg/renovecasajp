import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }

   ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: ${(props) => props.theme["main-color"]};
  }

   :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["gray-500"]};
   }

   body {
    background-color: ${(props) => props.theme["white"]};
    color: ${(props) => props.theme["gray-800"]};
    -webkit-font-smoothing: antialiased;
   }
   
   body, input, textarea, button {
    font: 400 0.9rem 'Montserrat', sans-serif;
   }

   button {
    cursor: pointer;
   }
`;
