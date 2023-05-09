import { Navigate, createHashRouter } from 'react-router-dom';
import { MainPage } from '../pages/Main/MainPage';

export const router = createHashRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);
