import { FC } from 'react';
import { LogoTitle } from '../components/LogoTitle';
import { useVlgStore } from '../../../vlgStore/vlgStore';


export const Slide3: FC = () => {
  const { name } = useVlgStore(state => state.accountProfile);
  const setIsAuthenticated = useVlgStore(state => state.setAccountProfile);

  const handleNavigation = () => {
    setIsAuthenticated({ isAutenticated: true });
  };

  return (
    <div className=" form-container -mt-4 w-[680px] flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <div>
          <LogoTitle />
        </div>

        <div>
          <h2>Bienvenido {name} </h2>
          <h3>tu cuenta ha sido creada</h3>
          <p>Tu cuenta está lista, ya puedes ingresar!</p>
        </div>
      </div>

      <div className="mb-6 bg-gray-vlg-200 h-44">

      </div>

      <button
        onClick={handleNavigation}
        type="button"
        className="btn-primary"
      >
        Ingresar ahora
      </button>
    </div>
  );
};
