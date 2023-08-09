import queryString from "query-string";
import { ReactNode, createContext, useState } from "react";

interface WhatsAppApiContextType {
  handleWhatsAppClick: () => void;
  text?: string;
  setText: (newText: string) => void;
}

interface WhatsAppApiContextProviderProps {
  children: ReactNode;
}

export const WhatsAppApiContext = createContext({} as WhatsAppApiContextType);

export const WhatsAppApiProvider = ({
  children,
}: WhatsAppApiContextProviderProps) => {
  const [text, setText] = useState("Olá. Me interessei pelos produtos");
  function handleWhatsAppClick() {
    const url = `https://api.whatsapp.com/send?${queryString.stringify({
      phone: "5583987663399",
      text: text,
    })}`;
    window.open(url, "_blank");
  }

  return (
    <WhatsAppApiContext.Provider value={{ handleWhatsAppClick, setText }}>
      {children}
    </WhatsAppApiContext.Provider>
  );
};
