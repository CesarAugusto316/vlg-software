import { createBrowserRouter } from 'react-router-dom';
import { Register, Login } from './app/auth/index';


export const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <App />
  // },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
]);
