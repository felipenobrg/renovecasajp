import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme["purple-300"]};
  padding: 3rem;
  max-height: 10rem;
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
  }
`;
