import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme["gray-900"]};
  padding: 20px;

  .horizontal-line {
    margin: 0 auto;
    width: 95%;
    margin-bottom: 1rem;
    border: 1px solid ${(props) => props.theme["gray-800"]};
  }

  p, h3 {
    color: ${(props => props.theme["white"])};
    font-weight: normal;
  }

`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  margin: 2rem;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const AboutRenoveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  p {
    width: 70%;
    margin-top: -1rem;
    color: ${(props => props.theme["white"])};
  }

  img {
    width: 15rem;
  }
  

  @media screen and (max-width: 1024px) {
    align-items: center;
     p {
      width: 80%;
      text-align: center;
      margin-bottom: 1rem;
     }

     
  }

`;

export const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 9px;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }
`;


export const PaymentMethodsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  
  @media screen and (max-width: 1024px) {
   margin-top: 2rem;
  }
`;

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  align-items: center; 

  img {
    height: auto;
    display: block;
    margin: 0 auto;
  }

  img:first-child {
    width: 2rem;
  }
`;

export const DevelopedBy = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 12px;
  text-align: center;

  a {
    color: ${(props) => props.theme["gray-500"]};
  }
`;
