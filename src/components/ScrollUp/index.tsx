import { ArrowCircleUp, WhatsappLogo } from "phosphor-react";
import { useState, useEffect } from "react";
import { ScrollDownContainer } from "./styles";
import { useWhatsAppApi } from "../../hooks/useWhatsAppApiContext";

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

  const { handleWhatsAppClick } = useWhatsAppApi()
  return (
    <ScrollDownContainer>
      <ArrowCircleUp
        onClick={scrollToTop}
        size={50}
        color="#400670"
        weight="fill"
      />
      <WhatsappLogo
        onClick={handleWhatsAppClick}
        size={55}
        weight="fill"
        color="#48C758"
      />
    </ScrollDownContainer>
  );
}
