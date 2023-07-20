import { styled } from "styled-components";

export const SectionContainer = styled.section`
  background: ${(props) => props.theme["purple-400"]};
  padding: 2rem;
  max-width: 100%;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    
    font-size: 0.85rem;
    text-align: center;
    overflow-x: auto;
  }
`;

export const SectionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-left: 1rem;
  overflow-x: auto;
  padding-right: 1rem;

  p {
    color: ${(props) => props.theme["gray-100"]};
  }

  a {
    text-decoration: none;
    font-weight: bold;
    color: ${(props) => props.theme["white"]};
    margin-right: 0.5rem;
    border-bottom: 2px solid transparent;


    &:hover {
      transition: 0.4s ease;
      border-bottom: 2px solid white;
    }
  }

  @media screen and (max-width: 768px) {
    gap: 1rem;
  }
`;
