import { styled, keyframes } from "styled-components";

const borderBottomAnimation = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

export const SectionContainer = styled.section`
  background: ${(props) => props.theme["main-color"]};
  padding: 1.2rem;
  max-width: 100%;
  overflow: auto;
  z-index: 100;

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
  z-index: 100;

  a {
    text-decoration: none;
    color: ${(props) => props.theme["white"]};
    position: relative;
    font-size: 0.9rem;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover::after {
      content: "";
      position: absolute;
      bottom: -5px; 
      left: 0;
      height: 2px;
      width: 100%;
      background: ${(props) => props.theme["white"]};
      animation: ${borderBottomAnimation} 0.3s ease;
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
    animation: ${borderBottomAnimation} 0.3s ease;
  }
`