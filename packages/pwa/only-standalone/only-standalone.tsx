import { FC, ReactNode } from 'react';
import { isStandalonePWA, isSupportPWA } from './utils';
import { InstalGuide } from './components/instal-guide';

interface IOnlyStandalone {
  children: ReactNode;
}

export const OnlyStandalone: FC<IOnlyStandalone> = ({ children }) => {
  if (isStandalonePWA() || import.meta.env.DEV) return <>{children}</>;
  if (!isSupportPWA()) return <h1>Your browser does not support PWA apps.</h1>;
  return <InstalGuide />;
};
