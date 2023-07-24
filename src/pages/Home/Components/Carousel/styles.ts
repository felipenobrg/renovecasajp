import { styled } from "styled-components";

export const CarouselContainer = styled.div`
  margin-top: 0.2rem;
  position: relative;
  z-index: 0;

  img {
    width: 100%;
    height: 58rem; 
  }

  @media (max-width: 768px) {
    img {
      height: 100%;
    }
  }
`;