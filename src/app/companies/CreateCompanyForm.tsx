import { FC } from 'react';
import { HorizontalSeparator } from '../../components/HorizontalSeparator';

interface CreateCompanyStepFormProps {
  onCancelar: () => void;
  onContinue: () => void;
}

export const CreateCompanyStepForm: FC<CreateCompanyStepFormProps> = ({ onCancelar }) => {
  // w-[900px] h-[calc(100vh-100px)] rounded-md
  return (
    <div className="bg-white p-8 w-screen h-screen flex flex-col justify-between">
      <HorizontalSeparator direction="up">
        <div>
          <h4 className="createSection__title">Hello World</h4>

          <div className="flex gap-10 items-cente">
            <h5 className="font-medium  text-blue-vlg-900">
              Datos de la empresa <br />
              Empresa y monedas
            </h5>

            <h5>
              Documentos contables <br />
              Documentos y formularios
            </h5>
          </div>

        </div>
      </HorizontalSeparator>


      <div className="flex justify-end">
        <button className="btn-light w-44" onClick={onCancelar}>
          Cancelar
        </button>
      </div>
    </div>
  );
};
