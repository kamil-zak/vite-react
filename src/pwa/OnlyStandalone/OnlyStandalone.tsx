import { FC } from 'react';
import { INodeChildrenProps } from '../../interfaces/nodeChildrenProps';
import { isStandalonePWA, isSupportPWA } from './utils/detectors';
import { InstalGuide } from './components/InstalGuide/InstalGuide';

export const OnlyStandalone: FC<INodeChildrenProps> = ({ children }) => {
  if (isStandalonePWA() || import.meta.env.DEV) return <>{children}</>;
  if (!isSupportPWA()) return <h1>Your browser does not support PWA apps.</h1>;
  return <InstalGuide />;
};
