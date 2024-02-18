import { createBrowserRouter } from 'react-router-dom';
import { Register, Login } from './auth/index';
import { RootLayout } from './layouts/RootLayout';
import { Operations } from './operations/Operations';
import { Companies } from './companies/Companies';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Operations /> },
      { path: '/companies', element: <Companies /> }
    ]
  },

  {
    path: '/login',
    element: <Login />
  },

  {
    path: '/register',
    element: <Register />
  }
]);
