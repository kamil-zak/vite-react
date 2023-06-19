import styled from 'styled-components';

export const Input = styled.input<{ tabs?: number; author?: boolean }>`
  padding-left: ${({ tabs = 1 }) => tabs * 38}px;
  background: transparent;
  border: 1px solid white;
  font-size: ${({ author }) => (author ? '20' : '36')}px;
  color: white;
  width: 100%;
  box-sizing: border-box;
  height: 50px;
  font-family: 'Mont Heavy', sans-serif;

  &:focus {
    outline: none;
    border: 1px solid white;
  }

  &::placeholder {
    color: #ccc;
  }
`;
