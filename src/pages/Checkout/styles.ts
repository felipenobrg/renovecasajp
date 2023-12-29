import { styled } from "styled-components";

export const H1 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0 2rem 0;
`;

export const CheckoutContainer = styled.div`
  width: 98%;
  margin-left: 1rem;
  span {
    font-weight: normal;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  border: 1px solid #ccc;
  margin-bottom: 2rem;
  padding: 1rem;
  height: 12rem;

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
    background-color: ${(props => props.theme["gray-300"])};
    display: flex;
    gap: 3px;
    margin-top: 1rem;
    color: ${(props => props.theme["black"])};
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

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
