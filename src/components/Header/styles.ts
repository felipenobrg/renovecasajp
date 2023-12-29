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
    max-height: 5rem;
    padding: 4rem;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  width: 100%;
  max-width: 1120px;

  img {
    margin-top: 1rem;
    width: 12rem;
    height: 12rem;
    object-fit: cover;
  }

  .shopping-cart {
    margin-top: 2.5rem;
    cursor: pointer;
  }

  .cart-count {
    position: absolute;
    background-color: ${(props) => props.theme["red"]};
    color: ${(props) => props.theme["white"]};
    border-radius: 50%;
    padding: 4px 8px;
    font-size: 12px;
    margin-top: -0.4rem;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 10rem;
      height: 10rem;
    }
  }
`;
