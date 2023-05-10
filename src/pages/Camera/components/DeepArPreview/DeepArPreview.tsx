import { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDeepAr } from '../../../../providers/DeepAr/DeepArContext';
import { usePortalContainer } from '../../../../hooks/usePortalContainer';
import shuffleBtnImg from '../../../../assets/layout/shuffleBtn.png';
import captureBtnImg from '../../../../assets/layout/captureBtn.png';
import cameraFrameImg from '../../../../assets/layout/cameraFrame.png';
import { DeepArPreviewButton, DeepArPreviewCounting, DeepArPreviewFrame } from './DeepArPreview.styles';

interface IDeepArPreviewProps {
  onCaptureTaken: (base64: string) => void;
}

export const DeepArPreview: FC<IDeepArPreviewProps> = ({ onCaptureTaken }) => {
  const { stop, start, takeCapture, switchEffect } = useDeepAr();
  const [counting, setCounting] = useState<number | null>(null);

  useEffect(() => {
    start();
    return () => stop();
  }, [start, stop]);

  const el = usePortalContainer();

  useEffect(() => {
    if (counting === null) return;
    if (counting === 0) {
      setCounting(null);
      takeCapture().then(onCaptureTaken);
      return;
    }
    const timeout = setTimeout(() => setCounting(counting - 1), 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [counting, takeCapture, onCaptureTaken]);

  const handleTakeCapture = () => {
    setCounting(3);
  };

  return createPortal(
    <>
      <DeepArPreviewFrame src={cameraFrameImg} alt="frame" />
      {counting && <DeepArPreviewCounting>{counting}</DeepArPreviewCounting>}
      {!counting && (
        <>
          <DeepArPreviewButton src={shuffleBtnImg} alt="suffle" onClick={switchEffect} />
          <DeepArPreviewButton src={captureBtnImg} alt="capture" onClick={handleTakeCapture} right />
        </>
      )}
    </>,
    el,
  );
};
