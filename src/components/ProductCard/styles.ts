import { styled } from "styled-components";

export const CardContainer = styled.div`
  display: inline-flex;
  width: calc(50% - 2rem);
  max-height: 100%;
  margin: 2rem 1rem 1rem 1rem; 
  flex: 1;
  text-decoration: none;
  position: relative;
  flex-wrap: wrap;
  
  &:hover {
    transition: 0.3s ease;
    border: 1px solid ${(props) => props.theme["black"]};
  }

  img {
    width: 32rem;
    height: 32rem;
    border-radius: 6px;
    object-fit: cover;
  }

  a {
    color: ${(props) => props.theme["black"]};
    text-decoration: none;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
    margin-bottom: 2rem;
    min-width: 100%;
    display: flex;
    flex-direction: column;

    img {
      width: 85vw;
      border-radius: 6px;
      height: 26rem;
      object-fit: contain;
    }
  }
`;

export const Click = styled.p`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  padding: 0.5rem;
  border-radius: 6px;
  position: absolute;
  top: 50px;
  right: 40px;
  background: ${(props) => props.theme["gray-100"]};
  opacity: 0.9;

  font-weight: bold;

  animation: shiver 1s infinite;

  &:hover {
    transition: 0.3s ease;
    background: ${(props) => props.theme["gray-300"]};;
  }

@keyframes shiver {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(1px) rotate(-1deg);
  }
  50% {
    transform: translateX(-3px) rotate(1deg);
  }
  75% {
    transform: translateX(3px) rotate(-1deg);
  }
  100% {
    transform: translateX(0);
  }
}`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem;
  max-width: 100%;
  height: 100%;
  overflow: hidden;
  flex: 1;

  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;

  @media (max-width: 768px) {
    margin: 0 auto;
    padding: 2rem;
    gap: 0.5rem;
  }
`;

export const TitleCard = styled.p`
  font-family: "Baloo 2", sans-serif;
  font-size: 1.5rem;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;

  @media (max-width: 768px) {
    text-overflow: normal;
    white-space: normal;
    font-size: 1.4rem;
  }
`;

export const ButtonShare = styled.button`
  border: 0;
`;

export const Price = styled.p`
  margin-right: auto;
  font-weight: bold;
  font-size: 1.1rem;
`;

export const MoneySign = styled.span`
  font-size: 0.9rem;
  font-weight: 100;
`;

export const OldPrice = styled.span`
  font-size: 0.9rem;
  text-decoration: line-through;
  color: ${(props) => props.theme["gray-500"]};
`;

export const ButtonCard = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;

  background: ${(props) => props.theme["green-300"]};
  color: ${(props) => props.theme["white"]};
  border-radius: 6px;
  padding: 0.8rem;
  margin-top: 1rem;
  border: 0;
  width: 100%;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    transition: 0.5s background-color;
    background: ${(props) => props.theme["green-400"]};
  }
`;

export const WornOut = styled.div`
  position: absolute;
  right: 10px;
  left: 10px;
  text-align: center;
  margin-top: -10rem;
  z-index: 1;
  color: ${(props) => props.theme["white"]};
  background: ${(props) => props.theme["red"]};
  padding: 10px;
  font-weight: bold;

  @media (min-width: 768px) {
    display: none;
  }
`;
