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

export const TotalAmountContainer = styled.div`
  margin-left: 1rem;
`;

export const WhatsAppButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 2rem auto;

  @media screen and (max-width: 768px) {
    width: 90%;
    margin-right: 2rem;
  }
`;
