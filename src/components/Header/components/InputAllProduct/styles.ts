import { styled } from "styled-components";

export const InputContainer = styled.div`
  position: sticky;
  top: 13rem;
  display: flex;
  background: ${(props) => props.theme["main-color"]};
  z-index: 50;
  width: 100%;

  input {
    border: none;
    border-bottom: 1px solid ${(props) => props.theme["gray-300"]};
    padding: 1.6rem;
    width: 100%;
    transition: all 0.3s ease;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
  .close-button {
    cursor: pointer;
    margin-left: -4rem;
    margin-top: 1.3rem;
  }
  @media screen and (max-width: 768px) {
    top: 8rem;
  }
`;
