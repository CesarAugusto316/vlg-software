import { FC, ReactNode, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useVlgStore } from '../../../vlgStore/vlgStore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../firebase/firebaseConfig';


interface AuthWrapperProps {
  children: ReactNode;
}

export const AuthContainer: FC<AuthWrapperProps> = ({ children }) => {
  const isAutenticated = useVlgStore(state => state.accountProfile?.isAutenticated);
  const setIsAutenticated = useVlgStore(state => state.setAccountProfile);

  // TODO: move this logic to a custom hook and use it in Login and Register separetely
  useEffect(() => {
    if (isAutenticated) return;
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const accessToken = await user.getIdToken();
        // if (window.location.pathname === '/register') return;

        setIsAutenticated({ isAutenticated: true, accessToken });
      }
    });

    return () => unsubscribe && unsubscribe();
  }, [isAutenticated]);


  if (isAutenticated) {
    return <Navigate to="/" />;
  }
  return (
    <section className="bg-gradient-to-b from-gray-vlg-200 to-white w-screen h-screen overflow-hidden to-90% flex items-center justify-center">
      {children}
    </section>
  );
};
