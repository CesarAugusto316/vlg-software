import { FC } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import companyIcon from '../assets/icons/company.png';
import { If } from './utils/IfElse';
import { HorizontalSeparator } from './HorizontalSeparator';


interface CreateSectionProps {
  title: string;
  subtitle: string;
  btn1Text?: string;
  btn2Text: string;
}

export const CreateSection: FC<CreateSectionProps> = ({ btn2Text, subtitle, title, btn1Text }) => {
  return (
    <div>
      <HorizontalSeparator direction="up">
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
      </HorizontalSeparator>

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

      <HorizontalSeparator direction="down" />
    </div>
  );
};