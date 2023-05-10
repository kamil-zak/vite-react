import { Navigate, createHashRouter } from 'react-router-dom';
import { StartPage } from '../pages/Start/StartPage';
import { CameraPage } from '../pages/Camera/CameraPage';

export const router = createHashRouter([
  {
    path: '/camera',
    element: <CameraPage />,
  },
  {
    path: '/',
    element: <StartPage />,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);
