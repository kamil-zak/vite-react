import styled from 'styled-components';
import { fadeIn } from '../../../../styles/animations';

export const TouchInputWrapper = styled.div`
  padding: 35px 30px;
  width: 750px;
  height: 115px;
  background: white;
  color: ${({ theme }) => theme.colors.blue};
  display: flex;
  font-size: 57px;
  cursor: default;
  user-select: none;
  align-items: center;
  box-sizing: border-box;
`;

export const TouchInputCursor = styled.div`
  width: 0px;
  height: 100%;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -1px;
    width: 1px;
    height: calc(100% + 20px);
    background: ${({ theme }) => theme.colors.blue};
  }

  animation: ${fadeIn} 0.5s linear;
  animation-direction: alternate;
  animation-iteration-count: infinite;
`;
