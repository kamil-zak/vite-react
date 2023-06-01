import { useState, useEffect } from 'react';
import { TapCounter, TapImagesWrapper, TapImg, TapPageWrapper } from './tap-page.styles';
import { useWindowSize } from '../../hooks/use-window-size';
import { useNavigate } from 'react-router-dom';
import { useStats } from '@picsane/pwa/stats';
import { contain } from '../../utils/contain.util';

const imagesCount = 13;

export const TapPage = () => {
  const arrayRange = [...Array(imagesCount)].map((_, i) => i);
  const [current, setCurrent] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [tapCount, setTapCount] = useState(0);
  const [status, setStatus] = useState<'ready' | 'game' | 'finish'>('ready');

  const windowSize = useWindowSize();

  const { width, height } = contain(0.75, windowSize);

  useEffect(() => {
    if (status !== 'game') return;
    if (timeLeft === 0) return setStatus('finish');
    const timeout = setTimeout(() => setTimeLeft((x) => x - 1), 1000);
    return () => clearTimeout(timeout);
  }, [status, timeLeft]);

  const handleNext = () => {
    if (status === 'finish') return;
    setTapCount((x) => x + 1);
    setCurrent((current + 1) % imagesCount);
  };

  useEffect(() => {
    if (status === 'ready' && tapCount > 0) setStatus('game');
  }, [tapCount, status]);

  const navigate = useNavigate();
  useEffect(() => {
    if (status !== 'finish') return;
    const timeout = setTimeout(() => navigate('/'), 10000);
    return () => clearTimeout(timeout);
  }, [status, navigate]);

  const { registerAction } = useStats();

  useEffect(() => {
    if (status !== 'finish') return;
    registerAction('tap-game-ended', { tapCount });
  }, [status, tapCount, registerAction]);

  return (
    <TapPageWrapper onClick={handleNext}>
      <TapImagesWrapper width={width} height={height}>
        {arrayRange.map((x) => (
          <TapImg key={x} src={`/tap-images/${x + 1}.png`} alt="img" visible={current === x} />
        ))}
        <TapCounter size={height * 0.1} pulse={status === 'finish'}>
          {status === 'finish' ? tapCount : timeLeft}
        </TapCounter>
      </TapImagesWrapper>
    </TapPageWrapper>
  );
};
