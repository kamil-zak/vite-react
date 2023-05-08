import { FormEvent, useState } from 'react';
import { TeamsPageWrapper } from './TeamsPage.styles';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { sendOsc } from '../../services/oscService';
import { Input } from '../../components/Input/Input';

export const TeamsPage = () => {
  const [team1, setTeam1] = useState('');
  const [team2, setTeam2] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!team1 || !team2) return;
    sendOsc('/team1', [team1]);
    sendOsc('/team2', [team2]);
    navigate('/');
  };
  return (
    <form onSubmit={handleSubmit}>
      <TeamsPageWrapper>
        <div>
          <div>Team 1</div>
          <Input value={team1} onChange={(e) => setTeam1(e.target.value)} maxLength={15} />
        </div>
        <div>
          <div>Team 2</div>
          <Input value={team2} onChange={(e) => setTeam2(e.target.value)} maxLength={15} />
        </div>
        <Button>SAVE</Button>
      </TeamsPageWrapper>
    </form>
  );
};
