import styled from "styled-components";

export const PromotionsContainer = styled.div`
  h1 {
    margin: 1.5rem 2rem 0 2rem;
  }
`;

export const PromotionsCardGrid = styled.div`
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
