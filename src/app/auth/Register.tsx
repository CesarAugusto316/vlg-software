import { FC } from 'react';
import { AuthWrapper } from './Section';
import { LogoTitle } from './LogoTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


export const Register: FC = () => {
  return (
    <AuthWrapper>

      <form className=" form-container -mt-4 w-[672px]">
        <ul className="flex flex-col gap-4">
          <li>
            <LogoTitle />
          </li>

          <li>
            <h2>Crea tu cuenta</h2>
            <p>Ingresa tus datos para comenzar</p>
          </li>

          <li>
            <button type="button" className="btn-light">
              <FontAwesomeIcon size="lg" icon={faMicrosoft} />
              <span>Ingresar con Microsoft</span>
            </button>
          </li>

          <li className="flex items-center justify-between">
            <p>También puedes ingresar usando:</p>
            <hr className="w-1/3" />
          </li>

          <li>
            <label htmlFor="email" className="input-label">Correo</label>
            <input
              type="email"
              id="email"
              className="input-primary"
              placeholder="Ingresa tu correo"
              required
            />
          </li>

          <li>
            <label htmlFor="password" className="input-label">Contraseña</label>
            <input
              type="password"
              id="password"
              className="input-primary"
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
                className="checkbox-primary"
                required
              />
            </div>
            <label htmlFor="remember" className="checkbox-label">Recordarme</label>
          </li>

          <li className="mt-2">
            <button
              type="submit"
              className="btn-primary"
            >
              Ingresar
            </button>
          </li>

          <li>
            <Link className="btn-light-no-border" to="/login">Volver al Login</Link>
          </li>
        </ul>

      </form>
    </AuthWrapper>
  );
};
