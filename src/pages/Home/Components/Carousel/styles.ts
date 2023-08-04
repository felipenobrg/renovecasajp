import { styled } from "styled-components";

export const CarouselContainer = styled.div`
  margin-top: 0.2rem;
  z-index: 0;

  @media (max-width: 768px) {
    img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 25rem;
  display: none;
    }
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;