import { styled } from "styled-components";

export const CardPhotosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 1rem 0 1rem;

  a {
    width: 24%;
    display: block;
    text-decoration: none;
  }

  img {
    max-width: 100%; 
    border-radius: 9px;
    transition: transform 0.3s ease;

    &:hover {
      transition: 0.3s ease;
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap; 

    img {
      width: 20rem;
    }

    a {
      width: 48%; 
      margin-bottom: 1rem;
    }
  }
`;
