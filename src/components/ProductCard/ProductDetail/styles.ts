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

  button {
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
