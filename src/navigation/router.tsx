import { Navigate, createBrowserRouter } from 'react-router-dom';
import { MainPage } from '../pages/main-page/main-page';
import { TapPage } from '../pages/tap-page/tap-page';

export const router = createBrowserRouter([
  {
    path: '/tap',
    element: <TapPage />,
  },
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);
