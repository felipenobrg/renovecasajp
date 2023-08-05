import { WhatsappLogo } from "phosphor-react";
import { CardContainer, CardContent, TitleCard, Price, MoneySign, OldPrice, ButtonCard, WornOut } from "./styles";
import queryString from 'query-string';

interface ProductCardProps {
  imgSrc: string;
  wornOut?: string;
  title: string;
  price: string;
  oldPrice: string;
  textForWhatsApp: string;
}

export function ProductCard({ imgSrc, title, price, oldPrice, textForWhatsApp, wornOut }: ProductCardProps) {
  const handleWhatsAppClick = () => {
    const url = `https://api.whatsapp.com/send?${queryString.stringify({
      phone: '5583987663399',
      text: textForWhatsApp,
    })}`;
    window.open(url, '_blank');
  };

  // const handleShare = async () => {
  //   try {
      
  //     if (navigator.share) {
    
  //       await navigator.share({
  //         title: 'Furniture Store',
  //         text: 'Check out this amazing furniture!',
  //         url: 'https://www.yourfurniturestore.com/product123'
  //       });
  //     } else {
       
  //       alert('Web Share API is not supported in this browser.');
  //     }
  //   } catch (error) {
  //     console.error('Error sharing:', error);
  //   }
  // }

    return (
        <CardContainer>
        <CardContent>
        <img loading="lazy" src={imgSrc} alt=""/>
          {wornOut && <WornOut>{wornOut}</WornOut>}
          
          <TitleCard>{title}</TitleCard>
       
          <Price><MoneySign>R$</MoneySign> {price} <OldPrice>R$ {oldPrice}</OldPrice></Price>
          <ButtonCard onClick={handleWhatsAppClick} ><WhatsappLogo size={20} weight="fill" />COMPRAR</ButtonCard>
        </CardContent>
        </CardContainer>
    )

}


