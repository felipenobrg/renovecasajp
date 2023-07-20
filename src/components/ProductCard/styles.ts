import { styled } from "styled-components";

export const CardContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 2rem;
 
  img {
    width: 13rem;
    border-radius: 9px;
  }

  @media (max-width: 768px) {
    img {
      width: 100%;
    }
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 2rem 1rem 1rem 2rem;
  max-width: 100%;

  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  padding: 2rem 2rem 1rem 2rem;

  @media (max-width: 768px) {
    margin: 0;
  }
;
`;

export const TitleCard = styled.p`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.4rem;
  text-align: center;
`;


export const Price = styled.p`
  margin-right: auto;
  font-weight: bold;
  font-size: 1.1rem;
`;

export const MoneySign = styled.span`
  font-size: 0.9rem;
  font-weight: 100;
`
 
export const OldPrice = styled.span`
  font-size: 0.9rem;
  text-decoration: line-through;
  color: ${(props) => props.theme["gray-500"]};;
`

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
`
