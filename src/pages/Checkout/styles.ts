import { styled } from "styled-components";

export const H1 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0 2rem 0;
`;

export const CheckoutContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  span {
    font-weight: normal;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

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

export const ItemContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  background-color: ${(props) => props.theme["gray-100"]};
  width: 95%;
  margin-bottom: 2rem;
  padding: 4rem;
  height: 15rem;

  img {
    width: 8rem;
    margin-right: 10px;
    height: 8rem;
    object-fit: cover;
  }

  .title {
    font-size: 1.4rem;
    font-weight: normal;
  }

  p {
    font-size: 1.1rem;
    margin-top: 0.5rem;
    font-weight: bold;
  }

  button {
    padding: 0.4rem;
    width: 6.5rem;
    border: 0;
    display: flex;
    align-items: center;
    gap: 3px;
    margin-top: 1rem;
    color: ${(props) => props.theme["black"]};
    border-radius: 3px;

    &:hover {
      transition: 0.3s ease;
      background-color: ${(props) => props.theme["gray-300"]};
    }
  }
  @media screen and (max-width: 768px) {
    height: 15rem;
    padding: 2rem;

    .title {
      font-size: 1rem;
      width: 100%;
    }
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme["black"]};
    border-radius: 3px;
    width: 2rem;
  }
`;

export const TotalAmountContainer = styled.div`
   margin-left: 1rem;
`

export const WhatsAppButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: 2rem auto;

  @media screen and (max-width: 768px) {
    width: 90%;
    margin-right: 2rem;
  }
`;
