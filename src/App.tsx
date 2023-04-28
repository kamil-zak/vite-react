import { GlobalProvider } from './providers/globalProvider';

export const App = () => {
  return (
    <GlobalProvider>
      <h1>Hello world</h1>
    </GlobalProvider>
  );
};
