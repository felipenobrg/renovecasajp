import styled from "styled-components";

export const PromotionsContainer = styled.div`
  min-width: 100%;
`
export const CardContainer = styled.div`
  width: 19rem;
  height: 33rem;
  max-height: 100%;
  border-radius: 8px;
  overflow: hidden; 

  img {
    width: 13rem;
    height: 13rem;
    border-radius: 6px;
    object-fit: cover; 
  }

  @media (max-width: 768px) {
    min-width: 85%;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    height: 32rem;

    img {
      border-radius: 6px;
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
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  margin: 2rem;

  @media (max-width: 768px) {
    margin: 0 auto;
    padding: 2rem;
    gap: 0.5rem;
  }
`;

export const Emphasis = styled.p`
  display: flex;
  align-items: center;
  gap: 3px;
  font-weight: bold;
  font-size: 0.75rem;
  margin-top: 6px;
`;

export const Price = styled.p`
  margin-right: auto;
  font-weight: bold;
  font-size: 1.1rem;
`;

export const TitleCard = styled.p`
  font-family: "Baloo 2", sans-serif;
  font-size: 0.9rem;
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
  padding: 0.6rem;
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
