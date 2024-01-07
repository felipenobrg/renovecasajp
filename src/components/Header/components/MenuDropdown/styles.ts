import { NavLink } from "react-router-dom";
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
  overflow-y: auto;
  position: relative;
  margin-top: 2rem;
  padding-top: 10px;

  .header-container {
    display: flex;
    flex-direction: column;  }

  .header-content {
    display: flex;
    gap: 2rem;
    align-items: center;

    p {
      margin-left: 1rem;
      text-align: center;
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme["black"]};
    }
  }

  .line {
    border: 1px solid ${(props) => props.theme["gray-500"]};
    margin-top: 2rem;
    margin-left: 1rem;
    width: 100%;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme["black"]};
  padding: 15px 18px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  width: 100%;

`;

export const NavLinkContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  align-items: center;
  width: 100%;

  &.start {
    margin-top: 1rem;
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
  background: none;
  margin-left: -1rem;

  .icon {
    width: 24px;
    height: 2px;
    background: ${(props) => props.theme["white"]};
    position: relative;
    display: flex;
  }

  .icon:before,
  .icon:after {
    content: "";
    position: absolute;
    width: 24px;
    height: 2px;
    background: ${(props) => props.theme["white"]};
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
  flex-direction: column;
  align-items: center;

  border: none;
  cursor: pointer;

  border-radius: 9px;
  padding: 5px;
`;
