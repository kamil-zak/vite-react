import styled from 'styled-components';

export const DeepArPreviewFrame = styled.img<{ right?: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
`;

export const DeepArPreviewButton = styled.img<{ right?: boolean }>`
  position: absolute;
  bottom: 280px;
  ${({ right }) => (right ? 'right: 137px;' : 'left: 137px;')}
`;

export const DeepArPreviewCounting = styled.div`
  position: absolute;
  margin: auto;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 300px;
  color: #f2cb19;
`;
