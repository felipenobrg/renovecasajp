import { styled } from "styled-components";

export const SectionContainer = styled.section`
  background: ${(props) => props.theme["purple-400"]};
  padding: 2rem;
  max-width: 100%;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;

    font-size: 0.95rem;
    text-align: center;
    overflow-x: auto;
  }
`;

export const SectionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-left: -1rem;
  padding-right: 1rem;

  p {
    color: ${(props) => props.theme["gray-100"]};
  }

  a {
    text-decoration: none;
    font-weight: bold;
    color: ${(props) => props.theme["gray-100"]};
    position: relative;
    font-size: 1rem;
  }
  
  a.active::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1.4px;
    width: 100%;
    background: ${(props) => props.theme["white"]};
  }

  @media screen and (max-width: 768px) {
    gap: 1rem;
  }
`;
