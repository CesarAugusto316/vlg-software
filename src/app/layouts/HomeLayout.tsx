import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { Navbar } from '../../components/Navbar';


export const HomeLayout: FC = () => {
  return (
    <div className="text-[15px] h-screen w-screen overflow-hidden bg-white flex">
      <Sidebar />

      <main className="flex-1 flex flex-col">
        <Navbar />

        <div className="p-6 flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
