import { styled } from "styled-components";

export const DeliveryContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 0.3rem;
  color: ${(props) => props.theme["gray-500"]};
  font-weight: bold;

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 0.8rem;
  }
`;

export const SectionContainer = styled.section`
  background: ${(props) => props.theme["purple-400"]};
  padding: 2rem;

  max-width: 100%;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    text-align: center;
    overflow-x: auto;
  }
`;

export const SectionContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: auto;

  padding-right: 1rem;

  a {
    text-decoration: none;
    font-weight: bold;
    color: ${(props) => props.theme["gray-100"]};
    margin-right: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    gap: 1rem;
  }
`;

export const CarouselContainer = styled.div`
  margin-top: 0.5rem;
  img {
    width: 100%;
    height: 30rem;
  }
`;
