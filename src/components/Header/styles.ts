import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme["beige-400"]};
  padding: 3rem;
  max-height: 10rem;
  max-width: 100%;

  position: sticky;
  top: 0;
  position: 0;

  @media screen and (max-width: 768px) {
    max-height: 5rem;
    padding: 4rem;
  }

`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 1120px;

  img {
    margin-top: 1rem;
    width: 18rem;
    height: 18rem;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    img {
      height: 16rem;
      width: 17rem;
    }
  }
`;
