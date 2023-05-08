import styled from 'styled-components';

export const Input = styled.input`
  padding: 10px 30px;
  background: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fontSizes.base};
  border-radius: 20px;
  color: white;
  width: calc(100vw - 150px);
  border: 0;
  @media (min-width: 1000px) {
    width: 700px;
  }
`;
