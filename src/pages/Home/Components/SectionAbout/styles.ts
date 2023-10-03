import { styled } from "styled-components";

export const SectionAboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  padding: 3rem;

  div {
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      text-align: center;
      font-weight: bold;
      font-size: 1.1rem;
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
