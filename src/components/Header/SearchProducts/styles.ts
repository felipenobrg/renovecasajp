import { styled } from "styled-components";

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
  z-index: 100;

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
  z-index: 100;

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