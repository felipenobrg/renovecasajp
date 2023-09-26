import { keyframes, styled } from "styled-components";

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

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const DropdownMenu = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? "flex" : "none")};
  z-index: 100;
  position: fixed;

  bottom: 0px;
  left: 0px;
  width: 70%;
  background-color: ${(props) => props.theme["gray-100"]};
  animation: ${(props) => (props.open ? slideIn : fadeOut)} 0.3s ease-in-out;
  overflow-y: auto;
  height: 100%;
  text-align: right;
  padding-right: 20px;

  @media screen and (max-width: 768px) {
    overflow: auto;
  }
`;

export const DropdownList = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  align-items: flex-start;
  overflow-y: auto;
  position: relative;
  margin-top: 2rem;
  padding-top: 10px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.theme["gray-700"]};
    padding: 15px 18px;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;

    &:hover {
      transition: 0.3s ease;
      transform: scale(1.1);
    }
  }

  .whatsapp-button {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.7rem;
    border: 0;
    border-radius: 9px;
    margin: 1rem 0 0 1rem;
    background: ${(props) => props.theme["green-300"]};
    color: ${(props) => props.theme["white"]};
    font-weight: bold;

    &:hover {
      transition: 0.3s ease;
      background: ${(props) => props.theme["green-400"]};
    }
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

export const CloseButton = styled.button`
  display: flex;
  align-items: center;

  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 0px;
  top: 20px;
  background: ${(props) => props.theme["gray-300"]};
  border-radius: 9px;
  padding: 4px;

  transition: background-color 0.3s ease;

  &:hover {
    background: ${(props) => props.theme["gray-400"]};
  }
`;
