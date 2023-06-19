import { FC, FormEvent, useState } from 'react';
import { sendOsc } from '../../../../services/oscService';
import teamsIcon from '../../../../assets/teams_icon.png';
import saveBtn from '../../../../assets/buttons/save.btn.png';
import { Input } from '../../../../components/Input/Input';
import { SaveBtn, TeamsIcon, TeamsWrapper } from './Teams.styles';

interface ITeamsProps {
  onReady: () => void;
}

export const Teams: FC<ITeamsProps> = ({ onReady }) => {
  const [team1, setTeam1] = useState('');
  const [team2, setTeam2] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!team1 || !team2) return;
    sendOsc('/team1', [team1]);
    sendOsc('/team2', [team2]);
    onReady();
  };
  return (
    <TeamsWrapper>
      <TeamsIcon src={teamsIcon} alt="teams" />
      <Input value={team1} onChange={(e) => setTeam1(e.target.value.toUpperCase())} maxLength={15} />
      <Input value={team2} onChange={(e) => setTeam2(e.target.value.toUpperCase())} maxLength={15} />
      <SaveBtn onClick={handleSubmit} src={saveBtn} alt="save" />
    </TeamsWrapper>
  );
};
