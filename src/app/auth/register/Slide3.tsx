import { FC } from 'react';
import { LogoTitle } from '../components/LogoTitle';
import { useVlgStore } from '../../../vlgStore/vlgStore';
import { Link } from 'react-router-dom';


export const Slide3: FC = () => {
  const { name } = useVlgStore(state => state.accountProfile);

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

      <Link to="/" className="btn-primary">
        Ingresar ahora
      </Link>
    </div>
  );
};
