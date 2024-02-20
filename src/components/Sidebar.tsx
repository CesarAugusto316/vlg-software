import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import { useVlgStore } from '../vlgStore/vlgStore';
import logoImg from '../assets/icons/vlg-logo.png';
import { defaultImagePlaceholder } from '../constants';


export const Sidebar: FC = () => {
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
    <aside className="h-full border border-gray-vlg-200">

      <nav className="relative h-full flex flex-col justify-between">

        <section>
          <div className="h-16 flex items-center justify-center gap-2">
            <img className="h-9 w-9" src={logoImg} alt="vlg-logo" />
            <h3 className="text-blue-vlg-900">VLG</h3>
          </div>

          <ul className="font-medium flex flex-col gap-0.5 pt-4">
            <NavLink
              to={'/companies'}
              className={({ isActive }) => `nav-link ${isActive && 'nav-link--active'}`}
            >
              <img className="h-5 w-5 rounded-full" src={defaultImagePlaceholder} alt="empresas" />
              Empresas
            </NavLink>

            <NavLink
              to={'/'}
              className={({ isActive }) => `nav-link ${isActive && 'nav-link--active'}`}
            >
              <img className="h-5 w-5 rounded-full" src={defaultImagePlaceholder} alt="operaciones" />
              Operaciones
            </NavLink>

            <NavLink
              className={({ isActive }) => `nav-link ${isActive && 'nav-link--active'}`}
              to={'/accounting'}
            >
              <img className="h-5 w-5 rounded-full" src={defaultImagePlaceholder} alt="contabilidad" />
              Contabilidad
            </NavLink>

            <NavLink
              className={({ isActive }) => `nav-link ${isActive && 'nav-link--active'}`}
              to={'/users-and-roles'}
            >
              <img className="h-5 w-5 rounded-full" src={defaultImagePlaceholder} alt="users" />
              Usuarios y roles
            </NavLink>

            <NavLink
              className={({ isActive }) => `nav-link ${isActive && 'nav-link--active'}`}
              to={'/maintainers'}
            >
              <img className="h-5 w-5 rounded-full" src={defaultImagePlaceholder} alt="matainers" />
              Mantenedores
            </NavLink>
          </ul>
        </section>

        <section className="py-6 px-5">
          <button
            onClick={handleSignOut}
            className="btn-primary">
            Sign Out
          </button>
        </section>
      </nav>
    </aside>
  );
};
