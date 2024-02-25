import { createBrowserRouter } from 'react-router-dom';
import { Register, Login } from './auth/index';
import { HomeLayout } from './layouts/HomeLayout';
import { Operations } from './operations/Operations';
import { CompaniesPage } from './companies/CompaniesPage';
import { ProtectedRoute } from './layouts/ProtectedRoute';
import { Maintainers } from './maintainers/Maintainers';
import { Accounting } from './accounting/Accounting';
import { UsersAndRoles } from './usersAndRoles/UsersAndRoles';
import { AccountProfile } from './accountProfile/AccountProfile';


export const router = createBrowserRouter([
  {
    path: '',
    element: (
      <ProtectedRoute>
        <HomeLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: '/', element: <Operations /> },
      { path: '/companies', element: <CompaniesPage /> },
      { path: '/operations', element: <Operations /> },
      { path: '/maintainers', element: <Maintainers /> },
      { path: '/accounting', element: <Accounting /> },
      { path: '/users-and-roles', element: <UsersAndRoles /> },
      { path: '/account-profile', element: <AccountProfile /> },
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
