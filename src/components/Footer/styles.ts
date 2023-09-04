import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #f0f0f0;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export const FooterContent = styled.div`
  max-width: 800px;
  text-align: center;
  font-size: 14px;
  color: ${(props => props.theme["gray-500"])};

  a {
    color: #696969;
  }
`;
