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
  gap: 1rem;
  width: 100%;
  max-width: 1120px;
 

  img {
    margin-top: 1rem;
    width: 18rem;
    height: 18rem;
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
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const DropdownMenu = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? "flex" : "none")};
  justify-content: center;
  align-items: flex-start;

  z-index: 100;
  position: fixed;
  top: 125px;
  left: 0px;
  height: 100%;
  width: 60vw;
  background-color: ${(props) => props.theme["purple-400"]};
  border-radius: 4px;
  animation: ${slideIn} 0.3s ease-in-out;

  max-width: 100vw; 
  overflow-y: auto;
`;

export const DropdownList = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  align-items: flex-start;
  a {
    text-decoration: none;
    color: ${(props) => props.theme["white"]};
    display: block;
    padding: 17px 18px;
    text-align: center;
    font-size: 1.1rem;
    text-transform: uppercase;
    font-weight: bold;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.8rem;
    border: 0;
    border-radius: 9px;
    margin-left: 1rem;
    background: ${(props) => props.theme["green-300"]};
    color: ${(props) => props.theme["white"]};
    font-weight: bold;
  }
`;

interface DropdownButtonProps {
  open: boolean;
  onClick: () => void;
}

export const DropdownButton = styled.button<DropdownButtonProps>`
  position: absolute;
  z-index: 100;
  border: 0;
  padding: 15px 15px;
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
