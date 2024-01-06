import styled from "styled-components";

export const AboutGuaranteeContainer = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h1 {
    margin-top: 3rem;
    font-size: 1.2rem;
    font-family: "Roboto", sans-serif;
  }

  p {
    color: ${(props) => props.theme["gray-500"]};
  }
`;
