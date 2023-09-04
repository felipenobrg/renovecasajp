import { styled } from "styled-components";

export const SearchBarContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0.5rem 0.2rem 0;
   position: relative;

   span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #888;
    margin-right: 12rem;
  }

   
   input {
    padding: 0.6rem;
    border-radius: 8px;
    border: 0;
    padding-left: 2rem;
    background: ${(props => props.theme["gray-100"])};
   }

   @media screen and (max-width: 768px) {
    margin: 1rem 0 2rem 0;
   }
`