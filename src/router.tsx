import { createBrowserRouter } from 'react-router-dom';
import { Login } from './app';
import { Register } from './app/auth/Register';


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
