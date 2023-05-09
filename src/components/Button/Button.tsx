import styled from 'styled-components';

export const Button = styled.button`
  padding: 20px 30px;
  background: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  border-radius: 20px;
  color: white;
  border: 0;
`;
