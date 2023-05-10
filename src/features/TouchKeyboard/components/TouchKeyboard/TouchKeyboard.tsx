import { FC } from 'react';
import { TouchKeyboardButton, TouchKeyboardRow, TouchKeyboardWrapper } from './TouchKeyboard.styles';

const buttons = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '<'],
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '>'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '-', '_'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', '.', '@', 'gmail.com'],
];

const phoneButtons = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['', '0', '<'],
];

const upperButtons = buttons.map((x) => x.map((x) => x.toUpperCase()));

interface ITouchKeyboardProps {
  phone?: boolean;
  onKeyPress: (value: string) => void;
}

export const TouchKeyboard: FC<ITouchKeyboardProps> = ({ onKeyPress, phone }) => {
  const buttons = phone ? phoneButtons : upperButtons;
  return (
    <TouchKeyboardWrapper>
      {buttons.map((row, i) => (
        <TouchKeyboardRow key={i}>
          {row.map((btn) => (
            <TouchKeyboardButton key={btn} onClick={() => onKeyPress(btn)} width={btn === 'gmail.com' ? 130 : 65}>
              {btn}
            </TouchKeyboardButton>
          ))}
        </TouchKeyboardRow>
      ))}
    </TouchKeyboardWrapper>
  );
};
