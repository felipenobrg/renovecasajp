import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme["main-color"]};
  padding: 3rem;
  height: 10rem;
  max-width: 100%;
  z-index: 100;
  position: sticky;
  top: 0;

  @media screen and (max-width: 768px) {
    height: 5rem;
    padding: 4rem;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1120px;

  img {
    margin-top: 1rem;
    width: 12rem;
    height: 12rem;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 10rem;
      height: 10rem;
      margin-left: 4rem;
    }
  }
`;


export const InputContainer = styled.div`
  position: sticky;
  top: 10rem;
  display: flex;
  background: ${(props) => props.theme["main-color"]};
  z-index: 50;
  width: 100%;

  input {
    border: none;
    border-bottom: 1px solid ${(props) => props.theme["gray-300"]};
    padding: 1.5rem;
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
    margin-top: 1.5rem;
  }
  @media screen and (max-width: 768px) {
    top: 8rem;
  }
`;
