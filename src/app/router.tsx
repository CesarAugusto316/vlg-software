import { createBrowserRouter } from 'react-router-dom';
import { Register, Login } from './auth/index';


export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
]);
