import { useState } from 'react';
import { DeepArPreview } from './components/DeepArPreview/DeepArPreview';
import { CameraPageWrapper } from './CameraPage.styles';
import { CaptureSender } from '../../features/CaptureSender/CaptureSender';

export const CameraPage = () => {
  const [capture, setCapture] = useState<string | null>(null);

  return (
    <CameraPageWrapper>
      {!capture && <DeepArPreview onCaptureTaken={setCapture} />}
      {capture && <CaptureSender capture={capture} onCancel={() => setCapture(null)} />}
    </CameraPageWrapper>
  );
};
