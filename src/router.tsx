import { createBrowserRouter } from 'react-router-dom';
import App from './app/App';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
    // action: () => import("./app/App")
  }
]);
