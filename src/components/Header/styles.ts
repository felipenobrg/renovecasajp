import styled from "styled-components";
import { keyframes } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme["beige-400"]};
  padding: 3rem;
  max-height: 10rem;
  max-width: 100%;

  position: sticky;
  top: 0;
  z-index: 1;

  @media screen and (max-width: 768px) {
    max-height: 5rem;
    padding: 4rem;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 1120px;

  img {
    margin-top: 1rem;
    width: 18rem;
    height: 18rem;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    img {
      height: 16rem;
      width: 17rem;
    }
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const DropdownMenu = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 130px;
  right: 0;
  width: 100vw;
  background-color: ${(props) => props.theme["purple-400"]};
  border-radius: 4px;
  animation: ${slideIn} 0.3s ease-in-out;
  z-index: 3;
`;

export const DropdownList = styled.div`
  a {
    text-decoration: none;
    color: ${(props) => props.theme["white"]};
    display: block;
    padding: 17px 18px;
    text-align: center;
    font-size: 1.1rem;
    font-weight: bold;
  }
`;

interface DropdownButtonProps {
  open: boolean;
  onClick: () => void;
}

export const DropdownButton = styled.button<DropdownButtonProps>`
  position: fixed;
  border: 0;
  padding: 15px 15px;
  cursor: pointer;
  margin-top: -1rem;
  background: none;

  .icon {
    width: 24px;
    height: 2px;
    background: ${(props) => props.theme["black"]};
    position: relative;
    display: flex;
  }

  .icon:before,
  .icon:after {
    content: "";
    position: absolute;
    width: 24px;
    height: 2px;
    background: ${(props) => props.theme["black"]};
    transition: transform 0.3s ease-in-out;
  }

  .icon:before {
    top: -6px;
  }

  .icon:after {
    top: 6px;
  }
`;
