import { FC } from 'react';
import { INodeChildrenProps } from '../interfaces/nodeChildrenProps';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { GlobalStyles } from '../styles/global';
import { StatsProvider } from './StatsProvider/StatsProvider';
import { getFirebaseSyncApi } from './StatsProvider/firebaseSyncApi';

const firebaseSyncApi = getFirebaseSyncApi(import.meta.env.VITE_FIREBASE_PROJECT_ID);

export const GlobalProvider: FC<INodeChildrenProps> = ({ children }) => (
  <StatsProvider syncApi={firebaseSyncApi}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  </StatsProvider>
);
