import { createBrowserRouter } from 'react-router-dom';
import { Login } from './app';


export const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <App />
  // },
  {
    path: '/login',
    element: <Login />
  }
]);
