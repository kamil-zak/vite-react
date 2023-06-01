import { FC } from 'react';
import { IChildrenProps } from '../interfaces';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { GlobalStyles } from '../styles/global';
import { StatsProvider } from '@picsane/pwa/stats';

export const GlobalProvider: FC<IChildrenProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <StatsProvider campaignId="72535903-4d1f-446d-b8c1-73c709d05dc6">{children}</StatsProvider>
  </ThemeProvider>
);
