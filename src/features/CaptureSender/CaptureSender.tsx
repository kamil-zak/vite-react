import { FC, useState } from 'react';
import { CapturePreview } from './components/CapturePreview/CapturePreview';
import { actionsApi } from '../../api';
import { CaptureAgreement } from './components/CaptureAgreement/CaptureAgreement';
import { CaptureDelivery } from './components/CaptureDelivery/CaptureDelivery';

interface ICaptureSenderProps {
  capture: string;
  onCancel: () => void;
}

export const CaptureSender: FC<ICaptureSenderProps> = ({ capture, onCancel }) => {
  const [accepted, setAccepted] = useState(false);
  const [captureFilename, setCaptureFilename] = useState<string | null>(null);

  const clear = () => {
    setAccepted(false);
    setCaptureFilename(null);
    onCancel();
  };

  const saveToUpload = () => actionsApi.saveCapture(capture).then(setCaptureFilename);

  if (captureFilename) return <CaptureDelivery captureFilename={captureFilename} onReject={clear} />;
  if (accepted) return <CaptureAgreement onAccept={saveToUpload} onReject={clear} />;
  return <CapturePreview capture={capture} onReject={clear} onAccept={() => setAccepted(true)} />;
};
