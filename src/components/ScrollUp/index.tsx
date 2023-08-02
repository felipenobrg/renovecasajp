import { ArrowCircleUp, WhatsappLogo } from "phosphor-react";
import { useState, useEffect } from "react";
import { ScrollDownContainer } from "./styles";
import queryString from "query-string";

export function ScrollUp() {
  const [, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShowArrow = window.scrollY > 200;
      setShowArrow(shouldShowArrow);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleWhatsAppClick() {
    const url = `https://api.whatsapp.com/send?${queryString.stringify({
      phone: "5583987663399",
      text: "Olá. Me interessei pelos produtos",
    })}`;
    window.open(url, "_blank");
  }
  return (
    <ScrollDownContainer>
      <ArrowCircleUp
        onClick={scrollToTop}
        size={50}
        color="#7D14AF"
        weight="fill"
      />
      <WhatsappLogo
        onClick={handleWhatsAppClick}
        size={60}
        weight="fill"
        color="#48C758"
      />
    </ScrollDownContainer>
  );
}
