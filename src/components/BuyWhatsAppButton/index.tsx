import { WhatsappLogo } from "phosphor-react";
import { ButtonCard } from "./styles";


interface BuyWhatsAppButtonProps {
    handleButtonClick: () => void; 
    TextButton: string;
  }

  export function BuyWhatsAppButton({ handleButtonClick, TextButton }: BuyWhatsAppButtonProps) {
    return (
      <ButtonCard onClick={handleButtonClick}>
        <WhatsappLogo size={22} />
        {TextButton} 
      </ButtonCard>
    );
  }