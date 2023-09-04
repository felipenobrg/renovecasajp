import { styled } from "styled-components";

export const SearchBarContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 1rem 0 0 0;
   position: relative;

   input {
    padding: 0.6rem;
    border-radius: 8px;
    border: 0;
    padding-left: 2rem;
    background: ${(props => props.theme["gray-100"])};
   }

   span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #888;
    margin-right: 12rem;
  }

   @media screen and (max-width: 768px) {
    margin: 1rem 0 2rem 0;
   }
`