import { FC } from 'react';
import { INodeChildrenProps } from '../interfaces/nodeChildrenProps';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { GlobalStyles } from '../styles/global';
import { DeepArProvider } from './DeepAr/DeepArProvider';
import { ConfigProvider } from './Config/ConfigProvider';

export const GlobalProvider: FC<INodeChildrenProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider>
        <DeepArProvider left={98} top={96} width={884} height={1632}>
          <GlobalStyles />
          {children}
        </DeepArProvider>
      </ConfigProvider>
    </ThemeProvider>
  );
};
