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

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 20rem;
  overflow-y: auto;
  list-style: none;
  cursor: pointer;
  position: sticky;
  top: 10rem;
  background-color: ${(props) => props.theme["white"]};

  .product-link {
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    height: 12rem;
    width: 100%;
  }
`;

export const Li = styled.li`
  margin: 0.5rem;
  border-bottom: 1px solid ${(props) => props.theme["gray-300"]};
  padding: 1rem;
  text-align: center;
  color: ${(props) => props.theme["black"]};

  &:hover {
    border: 1px solid ${(props) => props.theme["gray-300"]};
    border-radius: 8px;
  }

  h1 {
    font-size: 1rem;
    font-weight: normal;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  img {
    height: 15rem;
    width: 15rem;
    object-fit: cover;
    border-radius: 8px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
    gap: 10px;

    img {
      width: 5rem;
      height: 5rem;
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
