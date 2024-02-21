import { createBrowserRouter } from 'react-router-dom';
import { Register, Login } from './auth/index';
import { HomeLayout } from './layouts/HomeLayout';
import { Operations } from './operations/Operations';
import { Companies } from './companies/Companies';
import { ProtectedRoute } from './layouts/ProtectedRoute';
import { Maintainers } from './maintainers/Maintainers';
import { Accounting } from './accounting/Accounting';
import { UsersAndRoles } from './usersAndRoles/UsersAndRoles';


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
      { path: '/companies', element: <Companies /> },
      { path: '/operations', element: <Operations /> },
      { path: '/maintainers', element: <Maintainers /> },
      { path: '/accounting', element: <Accounting /> },
      { path: 'users-and-roles', element: <UsersAndRoles /> }
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
