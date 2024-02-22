import { FC, ReactNode } from 'react';


interface AuthWrapperProps {
  children: ReactNode;
}

export const AuthContainer: FC<AuthWrapperProps> = ({ children }) => {
  return (
    <section className="bg-gradient-to-b from-gray-vlg-200 to-white w-screen h-screen overflow-hidden to-90% flex items-center justify-center">
      {children}
    </section>
  );
};
