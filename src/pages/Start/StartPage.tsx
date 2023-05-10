import { StartPageButton, StartPageWrapper } from './StartPage.styles';
import startBtnImg from '../../assets/layout/startBtn.png';
import { useNavigate } from 'react-router-dom';

export const StartPage = () => {
  const navigate = useNavigate();

  return (
    <StartPageWrapper>
      <StartPageButton src={startBtnImg} alt="start" onClick={() => navigate('/camera')} />
    </StartPageWrapper>
  );
};
