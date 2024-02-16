import { FC } from 'react';
import vlgLogo from '../../assets/icons/vlg-logo.png';


export const Login: FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-vlg-200 to-white h-screen to-90% flex items-center justify-center">

      <form className="-mt-10 w-[460px] bg-white p-8 rounded-xl border-gray-vlg-100 border-2">
        <ul className="flex flex-col gap-5">
          <li className="flex items-center gap-2">
            <img
              className="w-12 h-12 shadow-md-light"
              src={vlgLogo}
              alt="vlg-logo"
            />
            <h2 className="text-blue-vlg-900 ">VLG Software</h2>
          </li>

          <li>
            <h2>Bienvenido!</h2>
            <p>No tienes cuenta VLG? <a href="#" >Crea una ahora</a></p>
          </li>

          <li>
            <label htmlFor="email" className="block mb-2 text-sm font-medium  dark:text-white">Your email</label>
            <input
              type="email"
              id="email"
              className="shadow-sm  bg-white border border-gray-vlg-300 font-medium text-sm rounded-lg focus:ring-blue-vlg-900 focus:border-blue-vlg-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light placeholder:italic placeholder-gray-vlg-400/80"
              placeholder="name@flowbite.com"
              required
            />
          </li>

          <li>
            <button
              type="submit"
              className="text-white bg-blue-vlg-500 hover:bg-blue-vlg-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Register new account
            </button>
          </li>
        </ul>

      </form>
    </div>
  );
};
