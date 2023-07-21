import { ArrowCircleUp } from "phosphor-react";
import { useState, useEffect } from "react";
import { ScrollDownContainer } from "./styles";

export function ScrollDown() {
    const [showArrow, setShowArrow] = useState(false);
    console.log(showArrow)

    useEffect(() => {
      const handleScroll = () => {
        const shouldShowArrow = window.scrollY > 200;
        setShowArrow(shouldShowArrow);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', 
      });
    };
    return (
        <ScrollDownContainer onClick={scrollToTop}>
        <ArrowCircleUp size={35} color="#7D14AF" weight="fill" />
        </ScrollDownContainer>
    )
}