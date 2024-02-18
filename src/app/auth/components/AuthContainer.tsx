import { FC, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useVlgStore } from '../../../vlgStore/vlgStore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../firebase/firebaseConfig';


interface AuthWrapperProps {
  children: ReactNode;
}

export const AuthContainer: FC<AuthWrapperProps> = ({ children }) => {
  const accessToken = useVlgStore(state => state.accountProfile?.accessToken);
  const setAccessToken = useVlgStore(state => state.setAccountProfile);

  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken && window.location.pathname === '/login') {
      navigate('/');
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const accessToken = await user.getIdToken();
        setAccessToken({ accessToken });
      }
    });

    return () => unsubscribe && unsubscribe();
  }, [accessToken]);

  return (
    <section className="bg-gradient-to-b from-gray-vlg-200 to-white w-screen h-screen overflow-hidden to-90% flex items-center justify-center">
      {children}
    </section>
  );
};
