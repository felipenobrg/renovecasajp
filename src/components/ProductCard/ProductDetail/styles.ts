import { styled } from "styled-components";

export const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 2rem;
  background: ${(props) => props.theme["base-card"]};
  padding: 3rem;
  border-radius: 6px;

  width: 50rem;

  div {
    display: flex;
    gap: 0.5rem;
  }

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    text-align: center;
  }

  img {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 100%;
    img {
      width: 100%;
    }
  }
`;

export const Price = styled.p`
  margin-right: auto;
  font-weight: bold;
  font-size: 1.1rem;
`;

export const MoneySign = styled.span`
  font-size: 0.9rem;
  font-weight: 100;
`;

export const OldPrice = styled.span`
  font-size: 0.9rem;
  text-decoration: line-through;
  color: ${(props) => props.theme["gray-500"]};
`;
