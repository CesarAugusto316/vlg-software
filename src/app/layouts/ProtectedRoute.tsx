/* eslint-disable react-hooks/exhaustive-deps */
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebaseConfig';
import { useVlgStore } from '../../vlgStore/vlgStore';


interface ProtectedRouteProps {
  children: React.ReactNode;
}

// TODO remember field sloud be stored in localStorage
export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const accountProfile = useVlgStore(state => state.accountProfile);
  const setAccessToken = useVlgStore(state => state.setAccountProfile);
  const navigate = useNavigate();


  useEffect(() => {
    if (accountProfile?.accessToken) return;
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log('user is logged in', user);
        const accessToken = await user.getIdToken();
        setAccessToken({ ...accountProfile, accessToken, uuid: user.uid });
      }
      else {
        console.log('user is not logged in');
        navigate('/login');
      }
    });

    const cleanUp = () => {
      if (unsubscribe) unsubscribe();
      if (!accountProfile?.isRemembered) signOut(auth);
    };
    return cleanUp;

  }, [accountProfile?.accessToken]);


  if (!accountProfile.accessToken) return null;


  return children;
};
