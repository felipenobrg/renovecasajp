import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["gray-100"]};
  padding: 3rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: black;
  }
`;
