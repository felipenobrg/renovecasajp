import { styled } from "styled-components";

export const CarouselContainer = styled.div`
  margin-top: 0.2rem;
  position: relative;
  z-index: 0;

  img {
    width: 100%;
    height: auto;
    max-height: 38rem;
  }

  @media (max-width: 768px) {
    img {
      max-height: 24rem; 
    }
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;