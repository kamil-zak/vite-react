import { FC } from 'react';
import { INodeChildrenProps } from '../interfaces/nodeChildrenProps';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { GlobalStyles } from '../styles/global';

export const GlobalProvider: FC<INodeChildrenProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);
