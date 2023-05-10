import styled from 'styled-components';
import startPageImg from '../../assets/layout/startPage.png';

export const StartPageWrapper = styled.div`
  position: relative;
  width: 1080px;
  height: 1920px;
  background: url(${startPageImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center bottom;
`;

export const StartPageButton = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 263px;
`;
