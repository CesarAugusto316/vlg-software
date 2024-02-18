import { createBrowserRouter } from 'react-router-dom';
import { Register, Login } from './auth/index';
import { HomeLayout } from './layouts/HomeLayout';
import { Operations } from './operations/Operations';
import { Companies } from './companies/Companies';
import { ProtectedRoute } from './layouts/ProtectedRoute';


export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <HomeLayout />
      </ProtectedRoute>
    ),
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
