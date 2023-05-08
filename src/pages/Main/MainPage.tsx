import { useNavigate } from 'react-router-dom';
import { sendOsc } from '../../services/oscService';
import { ActionButton, ActionImage, ActionText, ActionsList, MainPageWrapper } from './MainPage.styles';
import newGame from '../../assets/newGame.svg';
import playGame from '../../assets/playGame.svg';
import pauseGame from '../../assets/pauseGame.svg';
import { Button } from '../../components/Button/Button';

export const MainPage = () => {
  const navigate = useNavigate();
  return (
    <MainPageWrapper>
      <Button onClick={() => navigate('/teams')}>SET TEAMS</Button>
      <ActionsList>
        <ActionButton onClick={() => sendOsc('/newGame')} newGame>
          <ActionImage src={newGame} alt="new game" />
          <ActionText>NEW GAME</ActionText>
        </ActionButton>
        <ActionButton onClick={() => sendOsc('/startGame')}>
          <ActionImage src={playGame} alt="start game" />
          <ActionText>START GAME</ActionText>
        </ActionButton>
        <ActionButton onClick={() => sendOsc('/pauseGame')}>
          <ActionImage src={pauseGame} alt="pause game" />
          <ActionText>PAUSE GAME</ActionText>
        </ActionButton>
      </ActionsList>
    </MainPageWrapper>
  );
};
