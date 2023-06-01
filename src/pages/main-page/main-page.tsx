import { useNavigate } from 'react-router-dom';
import { MainPageSyncWidget, MainPageWrapper } from './main-page.styles';
import { useStats } from '@picsane/pwa/stats';

export const MainPage = () => {
  const navigate = useNavigate();
  const { storedCount } = useStats();
  return (
    <MainPageWrapper onClick={() => navigate('tap')}>
      <MainPageSyncWidget isSync={storedCount === 0}>{storedCount}</MainPageSyncWidget>
    </MainPageWrapper>
  );
};
