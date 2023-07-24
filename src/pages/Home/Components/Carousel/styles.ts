import { styled } from "styled-components";

export const CarouselContainer = styled.div`
  margin-top: 0.2rem;
  position: relative;
  z-index: 0;
  background-size: cover;
  background-position: center;
  height: 48rem;
  img {
    width: 100%;
    height: 48rem; 
  }

  @media (max-width: 768px) {
    img {
      height: 24rem;
    }
  }
`;