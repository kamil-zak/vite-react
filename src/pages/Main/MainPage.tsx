import { sendOsc } from '../../services/oscService';
import { ActionImg, ActionsList, MainPageLogo, MainPageWrapper } from './MainPage.styles';
import startGameBtn from '../../assets/buttons/start_game.btn.png';
import pauseGameBtn from '../../assets/buttons/pause_game.btn.png';
import newGameBtn from '../../assets/buttons/new_game.btn.png';
import setTeamsBtn from '../../assets/buttons/set_teams.btn.png';
import logo from '../../assets/pong_logo.png';
import { useState } from 'react';
import { Teams } from './components/Teams/Teams';

export const MainPage = () => {
  const [isTeamsMode, setIsTeamsMode] = useState(false);
  return (
    <MainPageWrapper>
      <MainPageLogo src={logo} alt="logo" />
      {isTeamsMode && <Teams onReady={() => setIsTeamsMode(false)} />}
      {!isTeamsMode && (
        <ActionsList>
          <ActionImg onClick={() => sendOsc('/newGame')} src={newGameBtn} alt="new game" />
          <ActionImg onClick={() => sendOsc('/startGame')} src={startGameBtn} alt="start game" />
          <ActionImg onClick={() => sendOsc('/pauseGame')} src={pauseGameBtn} alt="pause game" />
          <ActionImg onClick={() => setIsTeamsMode(true)} src={setTeamsBtn} alt="set teams" />
        </ActionsList>
      )}
    </MainPageWrapper>
  );
};
