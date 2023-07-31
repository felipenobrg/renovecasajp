import { styled } from "styled-components";

export const CardPhotos = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 1rem 0 1rem;

  a {
    width: 24%;
    display: block; 
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 9px;

    &:hover {
      transition: 0.3s ease;
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap; 
    a {
      width: 48%; 
      margin-bottom: 1rem;
    }
  }
`;
