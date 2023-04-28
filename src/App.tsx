import { RouterProvider } from 'react-router-dom';
import { GlobalProvider } from './providers/globalProvider';
import { router } from './navigation/router';

export const App = () => {
  return (
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  );
};
