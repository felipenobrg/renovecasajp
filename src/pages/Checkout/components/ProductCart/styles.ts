import { styled } from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  background-color: ${(props) => props.theme["gray-100"]};
  width: 95%;
  margin-bottom: 2rem;
  padding: 4rem;
  height: 15rem;

  img {
    width: 8rem;
    margin-right: 10px;
    height: 8rem;
    object-fit: cover;
  }

  .title {
    font-size: 1.4rem;
    font-weight: normal;
  }

  p {
    font-size: 1.1rem;
    margin-top: 0.5rem;
    font-weight: bold;
  }

  .remove-button {
    padding: 0.4rem;
    width: 6.5rem;
    border: 0;
    display: flex;
    align-items: center;
    gap: 3px;
    margin-top: 1rem;
    color: ${(props) => props.theme["black"]};
    background-color: ${(props) => props.theme["gray-300"]};
    border-radius: 3px;

    &:hover {
      transition: 0.3s ease;
      background-color: ${(props) => props.theme["gray-500"]};
    }
  }

  button {
    padding: 0.4rem;
    width: 2rem;
    border: 0;
    display: flex;
    align-items: center;
    gap: 3px;
    margin-top: 1rem;
    color: ${(props) => props.theme["black"]};
    background-color: ${(props) => props.theme["gray-300"]};
    border-radius: 3px;

    &:hover {
      transition: 0.3s ease;
      background-color: ${(props) => props.theme["gray-500"]};
    }
  }
  @media screen and (max-width: 768px) {
    height: 15rem;
    padding: 2rem;

    .title {
      font-size: 1rem;
      width: 100%;
    }
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
