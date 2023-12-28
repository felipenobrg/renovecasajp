import { styled } from "styled-components";

export const SearchBarContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 1rem 0 1rem 0;
   position: relative;

   input {
    padding: 0.6rem;
    height: 2.8rem;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme["gray-300"]};
    padding-left: 3.5rem;
    background: ${(props => props.theme["gray-100"])};
   }

   &:focus {
      outline: none; 
    }

   span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #888;
    margin-right: 11rem;
  }

   @media screen and (max-width: 768px) {
    margin: 1rem 0 2rem 0;
   }
`