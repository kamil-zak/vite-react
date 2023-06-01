import styled, { css } from 'styled-components';
import { pulseKeyframes } from '../../styles/animations';

export const TapPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
`;

interface ITapImgWrapperProps {
  width: number;
  height: number;
}
export const TapImagesWrapper = styled.div<ITapImgWrapperProps>`
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

interface ITapImgProps {
  visible: boolean;
}
export const TapImg = styled.img<ITapImgProps>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`;

interface ITapCounterProps {
  pulse: boolean;
  size: number;
}
export const TapCounter = styled.div<ITapCounterProps>`
  position: absolute;
  bottom: ${({ size }) => size / 2}px;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  font-size: ${({ size }) => size / 2}px;
  color: white;
  font-weight: bold;

  ${({ pulse }) =>
    pulse &&
    css`
      animation: ${pulseKeyframes} 1.5s ease-in-out;
      animation-iteration-count: infinite;
    `}
`;
