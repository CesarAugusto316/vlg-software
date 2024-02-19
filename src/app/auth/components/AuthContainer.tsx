import { FC, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useVlgStore } from '../../../vlgStore/vlgStore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../firebase/firebaseConfig';


interface AuthWrapperProps {
  children: ReactNode;
}

export const AuthContainer: FC<AuthWrapperProps> = ({ children }) => {
  const isAutenticated = useVlgStore(state => state.accountProfile?.isAutenticated);
  const setAccountProfile = useVlgStore(state => state.setAccountProfile);
  const accessToken = useVlgStore(state => state.accountProfile?.accessToken);
  const navigate = useNavigate();

  // TODO: move this logic to a custom hook and use it in Login and Register separetely
  useEffect(() => {
    if (accessToken) return;
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const accessToken = await user.getIdToken();

        if (accessToken && window.location.pathname === '/login') {
          setAccountProfile({ uuid: user.uid, accessToken, isAutenticated: true });
        }
        if (accessToken && window.location.pathname === '/register') {
          setAccountProfile({ uuid: user.uid, accessToken });
          // TODO: handle the case when the user is already registered and page is refreshed
          // navigate('/');
        }
      }
    });

    return () => unsubscribe && unsubscribe();
  }, []);


  // Only ff AccountProfile isRemembered is set to true the user should be
  // redirect to stay in home page even when trying to exit from the app
  useEffect(() => {
    // if (isAutenticated && window.location.pathname === '/login') {
    //   navigate('/');
    // }
    // if (isAutenticated && window.location.pathname === '/register') {
    //   navigate('/');
    // }
  }, []);


  return (
    <section className="bg-gradient-to-b from-gray-vlg-200 to-white w-screen h-screen overflow-hidden to-90% flex items-center justify-center">
      {children}
    </section>
  );
};
