import { styled } from "styled-components";

export const SectionContainer = styled.section`
  background: ${(props) => props.theme["main-color"]};
  padding: 1.2rem;
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
    color: ${(props) => props.theme["white"]};
    position: relative;
    border-bottom: 1px solid transparent;
    font-size: 0.9rem;
    cursor: pointer;

    &:hover {
      transition: color 0.3s ease;
      color: ${(props) => props.theme["gray-300"]};
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
