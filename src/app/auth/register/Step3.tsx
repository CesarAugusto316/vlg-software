import { FC } from 'react';
import { AuthContainer } from '../components/AuthContainer';
import { LogoTitle } from '../components/LogoTitle';
import { useVlgStore } from '../../../vlgStore/vlgStore';


export const Step3: FC = () => {
  const accountRegistration = useVlgStore(state => state.accountRegistration);


  return (
    <AuthContainer>
      <div className=" form-container -mt-4 w-[680px] flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div>
            <LogoTitle />
          </div>

          <div>
            <h2>Crea tu cuenta</h2>
            <p>Ahora los datos de tu organización</p>
          </div>
        </div>

        <div className="mb-14 bg-gray-vlg-200 h-36">

        </div>

        <button
          type="submit"
          className="btn-primary"
        >
          Ingresar ahora
        </button>
      </div>
    </AuthContainer>
  );
};
