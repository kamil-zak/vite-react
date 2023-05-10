import styled from 'styled-components';

export const CapturePreviewWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const CapturePreviewImg = styled.img`
  position: absolute;
  left: 54px;
  top: 96px;
  width: 972px;
  height: 1632px;
  object-fit: contain;
`;

export const CapturePreviewFrame = styled.img<{ right?: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
`;

export const CapturePreviewButton = styled.img<{ right?: boolean }>`
  position: absolute;
  bottom: 280px;
  ${({ right }) => (right ? 'right: 137px;' : 'left: 137px;')}
`;
