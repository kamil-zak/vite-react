import { Navigate, createBrowserRouter } from 'react-router-dom';
import { MainPage } from '../pages/Main/MainPage';
import { TeamsPage } from '../pages/Teams/TeamsPage';

export const router = createBrowserRouter([
  {
    path: '/teams',
    element: <TeamsPage />,
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
