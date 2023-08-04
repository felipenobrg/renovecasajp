import { styled } from "styled-components";

export const CardContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 35rem;
  max-height: 100%;
  margin: 2rem 2rem 1rem 2rem;
  flex: 1;

  img {
    width: 100%;
    height: 32rem;
    border-radius: 9px;

    .image-loading {
      background-color: red;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 200px;
    }
  }

  @media (max-width: 768px) {
    margin: 0 auto;
    margin-bottom: 2rem;
    max-width: 100%;

    img {
      width: 100vw;
    }
  }
`;

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
  font-size: 1.2rem;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 768px) {
    text-overflow: normal;
    white-space: normal;
    font-size: 1.4rem;
  }
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
  padding: 0.5rem;
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
  width: 10rem;
  text-align: center;
  z-index: 1;
  color: ${(props) => props.theme["white"]};
  background: ${(props) => props.theme["red"]};
  padding: 10px;
  font-weight: bold;
`;
