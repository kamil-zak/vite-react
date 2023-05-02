import { Navigate, createBrowserRouter } from 'react-router-dom';
import { MainPage } from '../pages/Main/MainPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);
