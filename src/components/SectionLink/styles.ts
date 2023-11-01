import { styled } from "styled-components";

export const SectionContainer = styled.section`
  background: ${(props) => props.theme["purple-400"]};
  padding: 2rem;
  max-width: 100%;
  overflow: auto;
  

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const SectionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 0 3rem 0 3rem;

  a {
    text-decoration: none;
    font-weight: bold;
    color: ${(props) => props.theme["white"]};
    position: relative;
    border-bottom: 1px solid transparent;

    &:hover {
      transition: 0.3 ease;
      color: ${(props) => props.theme["gray-100"]};
    }
  }

  a.active::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    height: 2px;
    width: 100%;
    background: ${(props) => props.theme["white"]};
  }
`;
