import { FC } from 'react';
import { TouchInputCursor, TouchInputWrapper } from './TouchInput.styles';

interface ITouchInputProps {
  value: string;
  cursor: number | null;
  prefix?: string;
  onCursorChange: (i: number) => void;
}

export const TouchInput: FC<ITouchInputProps> = ({ value, cursor, prefix = '', onCursorChange }) => {
  const elements = [...prefix, ...value].map((char, i) => (
    <span
      key={i}
      style={{ paddingRight: 1 }}
      onClick={(e) => {
        e.stopPropagation();
        const centerPoint = e.currentTarget.offsetLeft + e.currentTarget.offsetWidth / 2;
        if (e.clientX > centerPoint) return handleCursorChange(i + 1);
        handleCursorChange(i);
      }}
    >
      {char}
    </span>
  ));
  if (cursor !== null) elements.splice(cursor + prefix.length, 0, <TouchInputCursor key={-1} />);

  const handleCursorChange = (pos: number) => {
    if (pos < prefix.length) return onCursorChange(0);
    onCursorChange(pos - prefix.length);
  };
  return <TouchInputWrapper onClick={() => onCursorChange(value.length)}>{elements}</TouchInputWrapper>;
};
