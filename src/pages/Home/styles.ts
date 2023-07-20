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
    font-size: 0.7rem;
  }
`;

