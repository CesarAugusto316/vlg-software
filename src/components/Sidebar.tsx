import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from '../assets/icons/vlg-logo.png';
import { defaultImagePlaceholder } from '../constants';
import companiesLogo from '../assets/icons/company.png';
import operationslogo from '../assets/icons/operations.png';
import accountingLogo from '../assets/icons/accounting.png';
import usersLogo from '../assets/icons/users.png';
import maintainersLogo from '../assets/icons/maintainers.png';
import { ForEach } from './utils/ForEach';


const links = [
  {
    path: '/companies',
    name: 'Empresas',
    icon: companiesLogo
  },
  {
    path: '/',
    name: 'Operaciones',
    icon: operationslogo
  },
  {
    path: '/accounting',
    name: 'Contabilidad',
    icon: accountingLogo
  },
  {
    path: '/users-and-roles',
    name: 'Usuarios y roles',
    icon: usersLogo
  },
  {
    path: '/maintainers',
    name: 'Mantenedores',
    icon: maintainersLogo
  }
];


export const Sidebar: FC = () => {
  return (
    <aside className="h-full border border-gray-vlg-200 overflow-x-hidden">

      <nav className="relative h-full flex flex-col justify-between">

        <section>
          <div className="h-16 flex items-center justify-center gap-2">
            <img className="h-9 w-9" src={logoImg} alt="vlg-logo" />
            <h3 className="text-blue-vlg-900">VLG</h3>
          </div>

          <ul className="font-medium flex flex-col gap-0.5 pt-4">
            <ForEach items={links}>
              {({ icon, name, path }) => (
                <NavLink
                  key={name}
                  to={path}
                  className={({ isActive }) => `nav-link ${isActive && 'nav-link--active'}`}
                >
                  <img className="h-6 w-6 rounded-full" src={icon ?? defaultImagePlaceholder} alt={`${name}-icon`} />
                  <span>{name}</span>
                </NavLink>
              )}
            </ForEach>
          </ul>
        </section>
      </nav>
    </aside>
  );
};
