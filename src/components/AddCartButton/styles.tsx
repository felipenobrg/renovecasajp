import styled from "styled-components";

export const AddCartButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  background: ${(props) => props.theme["main-color"]};
  border-radius: 6px;
  padding: 1.5rem;
  margin-top: 1rem;
  width: 70%;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s ease;

  &:hover {
    background: ${(props) => props.theme["darker-main-color"]};
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const AddCartButtonStyle = styled.button`
  border: 0;
  background: none;
  font-weight: bold;
  color: ${(props) => props.theme["white"]};
  display: flex;
  align-items: center;
  gap: 3px;
  outline: none;

  &:focus, &:active {
    outline: none;
  }

`