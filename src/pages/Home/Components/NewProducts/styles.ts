import styled from "styled-components";

export const NewProductsContainer = styled.div`
  h1 {
    display: flex;
    justify-content: center;
    margin: 1.5rem 2rem 0 2rem;
    font-size: 1.8rem;
    font-family: 'Baloo 2', sans-serif;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.6rem;
    }
  }
`;

export const NewProductsCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;
  }
`;
