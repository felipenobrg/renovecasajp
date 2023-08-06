import { styled } from "styled-components";

export const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  position: relative;

  background: ${(props) => props.theme["base-card"]};
  padding: 3rem;
  border-radius: 6px;

  width: 50rem;

  div {
    display: flex;
    gap: 0.5rem;
  }

  h1 {
    font-size: 1.5rem;
    font-family: "Baloo 2", sans-serif;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  img {
    width: 80%;
    border-radius: 6px;
  }

  @media (max-width: 768px) {
    width: 100%;
    img {
      width: 100%;
    }

    button {
        width: 100%;
    }

    h1 {
      font-size: 1.4rem;
    }
  }
`;

export const ShareButton = styled.button`
   border: 0;
   background: none;
   width: 1rem;
   cursor: pointer;
   position: absolute;
   top: 0;
   right: 150px;
   margin-top: 3rem;
   text-decoration: 0;

   @media (max-width: 768px) {
    left: 130px;
  }
`

export const WhatsAppButton = styled.button`
 display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;

    cursor: pointer;
    width: 55%;
    border: 0;
    border-radius: 6px;
    padding: 0.8rem;

    background: ${(props) => props.theme["green-300"]};
    color: ${(props) => props.theme["white"]};
    font-weight: bold;

    &:hover {
        transition: 0.3s ease;
        background:  ${(props) => props.theme["green-400"]};;
    }
` 

export const Description = styled.div`
   display: flex;
   margin-bottom: 1rem;
   color: ${(props) => props.theme["gray-500"]};
   margin-top: 0.2rem;
   font-size: 0.8rem;
`

export const Price = styled.p`
  margin-right: auto;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const MoneySign = styled.span`
  font-size: 0.9rem;
  font-weight: 100;
`;

export const AboutGuarantee = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h1 {
    margin-top: 3rem;
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
  }

  p {
    color: ${(props) => props.theme["gray-500"]};
  }
`