import { styled } from "styled-components";

export const ButtonCard = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;

  background: #eefbef;
  color: ${(props) => props.theme["green-300"]};
  border-radius: 6px;
  padding: 0.8rem;
  margin-top: 1rem;
  border: 1px solid ${(props) => props.theme["green-300"]};
  width: 100%;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    transition: 0.5s background-color;
    border: 1px solid ${(props) => props.theme["green-400"]};
  }
`;