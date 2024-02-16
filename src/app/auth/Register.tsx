import { FC } from 'react';
import { AuthWrapper } from './components/Section';
import { LogoTitle } from './components/LogoTitle';
import { Link } from 'react-router-dom';


export const Register: FC = () => {
  return (
    <AuthWrapper>

      <form className=" form-container -mt-4 w-[680px] flex flex-col gap-4">
        <ul className="flex flex-col gap-4">
          <li>
            <LogoTitle />
          </li>

          <li>
            <h2>Crea tu cuenta</h2>
            <p>Ingresa tus datos para comenzar</p>
          </li>
        </ul>

        <ul className="grid grid-cols-2 gap-x-8 gap-y-4">

          <li>
            <label htmlFor="name" className="input-label">Nombres</label>
            <input
              type="text"
              id="name"
              className="input-primary"
              placeholder="Ingresa tus nombres"
              required
            />
          </li>

          <li>
            <label htmlFor="lastname" className="input-label">Apellidos</label>
            <input
              type="text"
              id="lastname"
              className="input-primary"
              placeholder="Ingresa tus apellidos"
              required
            />
          </li>

          <li>
            <label htmlFor="rut" className="input-label">Rut</label>
            <input
              type="text"
              id="rut"
              className="input-primary"
              placeholder="Sin puntos ni guión"
              required
            />
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

          <li>
            <label htmlFor="re-password" className="input-label">Confirmar contraseña</label>
            <input
              type="password"
              id="re-password"
              className="input-primary"
              placeholder="Repite tu contraseña"
              required
            />
          </li>
        </ul>

        <ul className="flex flex-col gap-2 mt-5 w-2/3 mx-auto">
          <li>
            <button
              className="btn-primary"
            >
              Continuar
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
