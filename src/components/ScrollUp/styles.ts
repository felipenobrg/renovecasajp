import { styled } from "styled-components";

export const ScrollDownContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 0.2rem;
   position: fixed;
   bottom: 20px;
   right: 5px;
   cursor: pointer;

   svg:hover {
      transition: 0.3s ease;
      transform: scale(1.1);
   }
`