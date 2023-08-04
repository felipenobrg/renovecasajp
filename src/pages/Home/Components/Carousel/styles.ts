import { styled } from "styled-components";

export const CarouselContainer = styled.div`
  margin-top: 0.2rem;
  position: relative;
  z-index: 0;

  @media (max-width: 768px) {
    img {
      display: block;
      max-width: 100%;
  
    }
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;