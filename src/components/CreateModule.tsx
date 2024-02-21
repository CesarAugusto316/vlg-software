import { FC } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import companyIcon from '../assets/icons/company.png';
import { If } from './utils/IfElse';


interface CreateModuleProps {
  title: string;
  subtitle: string;
  btn1Text?: string;
  btn2Text: string;
}

export const CreateModule: FC<CreateModuleProps> = ({ btn2Text, subtitle, title, btn1Text }) => {
  return (
    <div>
      <section className="flex gap-4 justify-between bg-gray-vlg-100/65 py-5 px-6 rounded-t-2xl border-b-2 border-gray-vlg-200/80">

        <div>
          <h4 className="text-blue-vlg-900 mb-2 font-bold">{title}</h4>
          <p className="text-sm">{subtitle}</p>
        </div>

        <div>
          <If
            condition={btn1Text}
            render={(
              <button type="button" className="btn-primary">{btn1Text}</button>
            )}
          />
        </div>
      </section>

      <div className="flex flex-col gap-6 justify-center min-h-[216px] items-center p-5">

        <div className="flex flex-col items-center">
          <img className="h-9 w-9" src={companyIcon} alt="company-icon" />

          <h6 className="font-semibold">Debes crear una Empresa</h6>
          <p className="text-sm">Para acceder a este módulo tienes que crear una empresa</p>
        </div>

        <div>
          <button type="button" className="btn-primary">
            <FontAwesomeIcon size="lg" icon={faPlus} />
            <span>{btn2Text}</span>
          </button>
        </div>
      </div>

      <div className="items-center border-t-2 border-gray-vlg-200/80 h-6 bg-gray-vlg-100/65 rounded-b-2xl" />
    </div>
  );
};
