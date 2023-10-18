import { styled } from "styled-components";

export const WhoWeAreContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 2rem;
   margin: 2rem 2rem 1rem 2rem;

   h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.8rem;
    display: flex;
    justify-content: center;
   }

   p {
    margin-top: 0.5rem;
    width: 100%;
    font-size: 1rem;
    color: ${(props => props.theme["gray-500"])};
   }

   @media (max-width: 768px) {
    h1 {
      font-size: 1.6rem;
    }
   }
` 