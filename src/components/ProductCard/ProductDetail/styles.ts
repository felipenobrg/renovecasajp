import { styled } from "styled-components";

export const ProductDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;

    img {
        width: 25%;
    }

    @media (max-width: 768px) {
     img {
        width: 100%;
     }
  }
`