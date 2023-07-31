import { styled } from "styled-components";

export const SectionAbout = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  padding: 3rem;

  div {
    h2 {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    div {
      svg {
        width: 3rem;
      }

      h2 {
        font-size: 1.2rem;
      }
    }
  }
`;
