import { FC } from 'react';
import { defaultImagePlaceholder } from '../constants';


export const Navbar: FC = () => {
  return (
    <menu className="flex items-center justify-between border-y border-gray-vlg-200 px-6 h-16">
      <h5 className="uppercase font-semibold">Company Name</h5>

      <ul className="flex w-[400px] justify-between items-center">
        <li className="flex gap-2 items-center">

          <button
            className="btn-light-no-border font-semibold"
          >
            <img className="w-6 h-6 rounded-full" src={defaultImagePlaceholder} alt="company-logo" />
            Crear una empresa
          </button>
        </li>
        <li>
          <span
            className="bg-gray-vlg-300 rounded-full p-2 font-bold text-sm text-blue-vlg-900"
          >
            FC
          </span>
        </li>
      </ul>
    </menu>
  );
};
