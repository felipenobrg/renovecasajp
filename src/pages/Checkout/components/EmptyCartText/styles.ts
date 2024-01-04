import { styled } from "styled-components";

export const ShoppingCartEmptyContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme["gray-100"]};
  padding: 2rem;
  gap: 2rem;
  width: 50%;
  margin: 0 auto;
  text-align: center;

  h2 {
    display: flex;
    gap: 6px;
    align-items: center;
    font-size: 1.2rem;
  }

  a {
    color: ${(props) => props.theme["gray-500"]};
  }
  
  @media screen and (max-width: 768px) {
    width: 90%;

    h2 {
      font-size: 1rem;
    }
  }
`;