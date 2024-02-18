import { FC } from 'react';
import { Outlet } from 'react-router-dom';


export const RootLayout: FC = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-white flex">

      <aside className="h-full p-6 border-r border-gray-vlg-200">
        <nav>
          <ul>
            <li>Empresas</li>
            <li>Operaciones</li>
            <li>Contabilidad</li>
            <li>Usuarios y roles</li>
            <li>Mantenedores</li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1">
        <menu className="flex items-center justify-between border-b border-gray-vlg-200 px-6 py-5">
          <div>Company Name</div>

          <ul className="flex gap-8">
            <li>Crear una empresa</li>
            <li>Menu de usario</li>
          </ul>
        </menu>

        <div className="p-6">
          <Outlet />
        </div>
      </main>

    </div>
  );
};
