import { FC } from 'react';
import companiesIcon from '../assets/icons/company.png';
import { Link } from 'react-router-dom';


export const Navbar: FC = () => {
  return (
    <menu className="flex items-center justify-between border-y border-gray-vlg-200 px-6 h-16">
      <h5 className="uppercase font-semibold text-base">Company Name</h5>

      <ul className="flex w-[440px] justify-between items-center">
        <li className="flex gap-2 items-center">
          <button
            type="button"
            className="btn-light-no-border font-bold text-blue-vlg-900 gap-1 text-base"
          >
            <img className="w-6 h-6 rounded-full" src={companiesIcon} alt="company-logo" />
            Crear una empresa
          </button>
        </li>

        <li>
          <Link to="/account-profile">
            <span
              className="bg-gray-vlg-300 rounded-full p-2 font-bold text-sm text-blue-vlg-900"
            >
              FC
            </span>
          </Link>
        </li>
      </ul>
    </menu>
  );
};
