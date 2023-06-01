import styled from 'styled-components';
import startImg from '../../assets/start.png';

export const MainPageWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: url(${startImg});
  background-size: cover;
  background-position: top;
`;

interface IMainPageSyncWidgedProps {
  isSync: boolean;
}
export const MainPageSyncWidget = styled.div<IMainPageSyncWidgedProps>`
  position: absolute;
  left: 10px;
  bottom: 10px;
  background: ${({ isSync }) => (isSync ? '#65b85a' : '#a84c4c')};
  padding: 10px 30px;
  border-radius: 10px;
  color: white;
`;
