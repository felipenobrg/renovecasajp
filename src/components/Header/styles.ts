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

export const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  pointer-events: none;
`;
