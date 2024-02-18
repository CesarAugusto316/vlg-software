/* eslint-disable react-hooks/exhaustive-deps */
import { onAuthStateChanged } from 'firebase/auth';
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebaseConfig';
import { useVlgStore } from '../../vlgStore/vlgStore';


interface ProtectedRouteProps {
  children: React.ReactNode;
}

// TODO store accessToken in localStorage
export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const accessToken = useVlgStore(state => state.accountProfile?.accessToken);
  const setAccessToken = useVlgStore(state => state.setAccountProfile);
  const navigate = useNavigate();

  const handleRedirectToHomeRoute = async () => {
    if (['/login', '/register'].includes(window.location.pathname)) {
      navigate('/');
    }
  };

  useEffect(() => {
    if (accessToken) {
      handleRedirectToHomeRoute();
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log('user is logged in', user);
        const accessToken = await user.getIdToken();
        setAccessToken({ accessToken });

        handleRedirectToHomeRoute();
      }
      else {
        console.log('user is not logged in');
        navigate('/login');
      }
    });

    return () => unsubscribe && unsubscribe();
  }, []);


  if (!accessToken) return null;

  return children;
};
