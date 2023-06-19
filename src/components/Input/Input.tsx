import styled from 'styled-components';

export const Input = styled.input`
  background: transparent;
  border: 2px solid #373231;
  padding: 10px 30px;
  font-size: ${({ theme }) => theme.fontSizes.base};
  border-radius: 20px;
  color: white;
  width: 70vw;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  @media (min-width: 1000px) {
    width: 70vw;
  }
`;
