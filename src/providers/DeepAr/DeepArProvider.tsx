import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import * as deepar from 'deepar';
import { DeepArContext } from './DeepArContext';
import { actionsApi } from '../../api';
import { useConfig } from '../Config/ConfigContext';

interface IDeepArProviderData {
  children: ReactNode;
  width: number;
  height: number;
  left: number;
  top: number;
}

export const DeepArProvider: FC<IDeepArProviderData> = ({ children, width, height, left, top }) => {
  const [deepAr, setDeepAr] = useState<deepar.DeepAR | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const ref = useRef<HTMLCanvasElement>(null);
  const [effects, setEffects] = useState<string[] | null>(null);
  const [effectIndex, setEffectIndex] = useState(0);

  const currentEffect = effects && effects[effectIndex];

  const config = useConfig();

  const switchEffect = () => {
    if (!effects) return;
    setEffectIndex((effectIndex + 1) % effects.length);
  };

  useEffect(() => {
    actionsApi.getEffectUrls().then(setEffects);
  }, []);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    deepar
      .initialize({
        licenseKey: config.testMode ? 'xxx' : config.deepArLicenseKey,
        canvas,
        additionalOptions: {
          cameraConfig: {
            disableDefaultCamera: true,
          },
        },
      })
      .then((instance) => {
        instance.setPaused(true);
        setDeepAr(instance);
      });
  }, [config]);

  useEffect(() => {
    if (!deepAr) return;
    const startVideo = async () => {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const deviceId = devices.find((x) => x.label.includes(config.cameraName) && x.kind === 'videoinput')?.deviceId;
      if (!deviceId) return;
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          deviceId: {
            exact: deviceId,
          },
          width: { ideal: 1080 },
          height: { ideal: 1920 },
        },
      });
      const video = document.createElement('video');
      video.setAttribute('autoplay', '1');
      video.srcObject = stream;
      deepAr.setVideoElement(video, false);
    };
    startVideo();
    return () => {
      deepAr.stopCamera();
      deepAr.shutdown();
    };
  }, [deepAr, config]);

  useEffect(() => {
    if (!deepAr) return;
    deepAr.setPaused(!isRunning);
  }, [deepAr, isRunning]);

  useEffect(() => {
    if (!deepAr || !currentEffect) return;
    deepAr.switchEffect(currentEffect);
  }, [deepAr, currentEffect]);

  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);

  const takeCapture = async () => {
    if (!deepAr) throw new Error('DeepAR is not initialized');
    deepAr.setPaused(true);
    setIsRunning(false);
    const image = await deepAr.takeScreenshot();
    return image;
  };

  const value = { start, stop, takeCapture, switchEffect };
  return (
    <DeepArContext.Provider value={value}>
      {deepAr && children}
      <div style={{ position: 'fixed', left, top, width, height, visibility: isRunning ? 'visible' : 'hidden' }}>
        <canvas ref={ref} width={width} height={height} />
      </div>
    </DeepArContext.Provider>
  );
};
