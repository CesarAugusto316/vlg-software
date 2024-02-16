import { FC } from 'react';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons/faMicrosoft';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthWrapper } from './Section';
import { LogoTitle } from './LogoTitle';
import { Link } from 'react-router-dom';


export const Login: FC = () => {
  return (
    <AuthWrapper>
      <form className="-mt-4 w-[448px] form-container">
        <ul className="flex flex-col gap-4">
          <li>
            <LogoTitle />
          </li>

          <li>
            <h2>Bienvenido!</h2>
            <p>No tienes cuenta VLG? <Link to={'/register'}>Crea una ahora</Link></p>
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
        </ul>

      </form>
    </AuthWrapper>
  );
};
