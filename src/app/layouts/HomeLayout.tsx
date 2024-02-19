import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';
import { useVlgStore } from '../../vlgStore/vlgStore';


export const HomeLayout: FC = () => {
  const resetAccountProfile = useVlgStore(state => state.resetAccountProfile);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      resetAccountProfile();
    } catch (error) {
      console.error('Error signing out', error);
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-white flex">

      <aside className="h-full border-r border-gray-vlg-200">
        <nav>
          <div className="h-16 flex items-center justify-center">
            <img src="" alt="" />
            <h2>Logo</h2>
          </div>
          <ul className="flex flex-col gap-6 p-6 min-w-48">
            <li>Empresas</li>
            <li>Operaciones</li>
            <li>Contabilidad</li>
            <li>Usuarios y roles</li>
            <li>Mantenedores</li>
            <li>
              <button
                onClick={handleSignOut}
                className="btn-primary">
                Sign Out
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 flex flex-col">
        <menu className="flex items-center justify-between border-b border-gray-vlg-200 px-6 h-16">
          <div>Company Name</div>

          <ul className="flex gap-8">
            <li>Crear una empresa</li>
            <li>Menu de usario</li>
          </ul>
        </menu>

        <div className="p-6 flex-1">
          <Outlet />
        </div>
      </main>

    </div>
  );
};