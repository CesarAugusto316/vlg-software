import { FC } from 'react';
import vlgLogo from '../../assets/icons/vlg-logo.png';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons/faMicrosoft';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Login: FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-vlg-200 to-white h-screen to-90% flex items-center justify-center">

      <form className="-mt-4 w-[448px] bg-white p-8 rounded-xl border-gray-vlg-100 border-2">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-2">
            <img
              className="w-11 h-11 shadow-md-light"
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
            <button type="button" className="hover:text-blue-vlg-600 gap-2 flex items-center justify-center shadow-sm w-full bg-white border border-gray-vlg-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg px-5 py-2.5   dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              <FontAwesomeIcon size="lg" icon={faMicrosoft} />
              <span>Ingresar con Microsoft</span>
            </button>
          </li>

          <li className="flex items-center justify-between">
            <p>También puedes ingresar usando:</p>
            <hr className="w-1/3" />
          </li>

          <li>
            <label htmlFor="email" className="block mb-2 text-sm font-medium  dark:text-white">Correo</label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-white border text-sm  border-gray-vlg-300 font-medium  rounded-lg focus:ring-blue-vlg-900 focus:border-blue-vlg-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light placeholder:italic placeholder-gray-vlg-400/80"
              placeholder="Ingresa tu correo"
              required
            />
          </li>

          <li>
            <label htmlFor="password" className="block mb-2 text-sm font-medium  dark:text-white">Contraseña</label>
            <input
              type="password"
              id="password"
              className="shadow-sm bg-white border text-sm  border-gray-vlg-300 font-medium  rounded-lg focus:ring-blue-vlg-900 focus:border-blue-vlg-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light placeholder:italic placeholder-gray-vlg-400/80"
              placeholder="Ingresa tu contraseña"
              required
            />
          </li>

          <li className="flex items-center">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="checked:bg-blue-vlg-900 w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-vlg-600/30 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
          </li>

          <li className="mt-2">
            <button
              type="submit"
              className="w-full text-white bg-blue-vlg-500 hover:bg-blue-vlg-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Ingresar
            </button>
          </li>
        </ul>

      </form>
    </div>
  );
};
