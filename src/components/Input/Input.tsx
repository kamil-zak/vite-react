import styled from 'styled-components';

export const Input = styled.input<{ tabs?: number; author?: boolean }>`
  padding-left: ${({ tabs = 1 }) => tabs * 38}px;
  background: rgba(255, 255, 255, 0.3);
  font-size: ${({ author }) => (author ? '20' : '36')}px;
  color: ${({ author }) => (author ? 'black' : 'white')};
  border: ${({ author }) => (author ? '1px solid black' : '0')};
  width: 100%;
  box-sizing: border-box;
  height: 50px;
  font-family: 'Mont Heavy', sans-serif;

  &:focus {
    outline: none;
    border: 1px solid gray;
  }

  &::placeholder {
    color: #ccc;
  }
`;
