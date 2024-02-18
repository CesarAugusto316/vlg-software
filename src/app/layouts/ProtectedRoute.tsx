/* eslint-disable react-hooks/exhaustive-deps */
import { onAuthStateChanged } from 'firebase/auth';
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebaseConfig';
import { useVlgStore } from '../../vlgStore/vlgStore';


interface ProtectedRouteProps {
  children: React.ReactNode;
}

// TODO remember field sloud be stored in localStorage
export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const accessToken = useVlgStore(state => state.accountProfile?.accessToken);
  const setAccessToken = useVlgStore(state => state.setAccountProfile);
  const navigate = useNavigate();


  useEffect(() => {
    if (accessToken) return;
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log('user is logged in', user);
        const accessToken = await user.getIdToken();
        setAccessToken({ accessToken, uuid: user.uid, isAutenticated: true });
      }
      else {
        console.log('user is not logged in');
        navigate('/login');
      }
    });

    return () => unsubscribe && unsubscribe();
  }, [accessToken]);


  if (!accessToken) return null;

  return children;
};
