import { FC } from 'react';
import {
  CapturePreviewButton,
  CapturePreviewFrame,
  CapturePreviewImg,
  CapturePreviewWrapper,
} from './CapturePreview.styles';
import retryImg from '../../../../assets/layout/retryBtn.png';
import okImg from '../../../../assets/layout/okBtn.png';
import cameraFrameImg from '../../../../assets/layout/cameraFrame.png';

interface ICapturePreviewProps {
  capture: string;
  onAccept: () => void;
  onReject: () => void;
}

export const CapturePreview: FC<ICapturePreviewProps> = ({ capture, onAccept, onReject }) => {
  return (
    <CapturePreviewWrapper>
      <CapturePreviewImg src={capture} alt="capture" />
      <CapturePreviewFrame src={cameraFrameImg} alt="frame" />
      <CapturePreviewButton src={retryImg} alt="reject" onClick={onReject} />
      <CapturePreviewButton src={okImg} alt="accept" onClick={onAccept} right />
    </CapturePreviewWrapper>
  );
};
