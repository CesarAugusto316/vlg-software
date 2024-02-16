import { FC, ReactNode } from 'react';


interface AuthWrapperProps {
  children: ReactNode;
}

export const AuthWrapper: FC<AuthWrapperProps> = ({ children }) => {
  return (
    <section className="bg-gradient-to-b from-gray-vlg-200 to-white h-screen to-90% flex items-center justify-center">
      {children}
    </section>
  );
};