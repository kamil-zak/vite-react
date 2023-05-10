import styled from 'styled-components';

export const TouchKeyboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  align-items: center;
`;

export const TouchKeyboardRow = styled.div`
  display: flex;
  gap: 3px;
`;

interface ITouchKeyboardButtonProps {
  width?: number;
}

export const TouchKeyboardButton = styled.div<ITouchKeyboardButtonProps>`
  min-width: ${({ width = 65 }) => width}px;
  border: 5px solid ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.blue};
  padding: 5px;
  box-sizing: border-box;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 34px;
  font-size: 36px;
  cursor: default;
  user-select: none;

  &:active {
    background: gray;
  }
`;
