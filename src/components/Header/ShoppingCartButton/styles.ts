import styled from "styled-components";

export const ShoppingCartContainer = styled.div`
  margin-top: 2.5rem;
  cursor: pointer;
  margin: 2.5rem 0 0 1rem;

  .cart-count {
    position: absolute;
    background-color: ${(props) => props.theme["red"]};
    color: ${(props) => props.theme["white"]};
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 12px;
    margin: -8px 0 0 -2px;
  }
`;
