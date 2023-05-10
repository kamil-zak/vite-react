import styled from 'styled-components';

export const CaptureAgreementButton = styled.img<{ right?: boolean }>`
  position: absolute;
  bottom: 280px;
  ${({ right }) => (right ? 'right: 137px;' : 'left: 137px;')}
`;
