import { FC } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import companyIcon from '../assets/icons/company.png';
import { If } from './utils/IfElse';
import { HorizontalSeparator } from './HorizontalSeparator';


interface CreateSectionProps {
  title: string;
  subtitle: string;
  btn1?: { text?: string; onClick?: () => void };
  btn2: { text?: string; onClick?: () => void };
}

export const CreateSection: FC<CreateSectionProps> = ({ btn2, subtitle, title, btn1 }) => {
  return (
    <div>
      <HorizontalSeparator direction="up">
        <div>
          <h4 className="createSection__title">{title}</h4>
          <p className="createSection__sub-title">{subtitle}</p>
        </div>

        <div>
          <If
            condition={btn1?.text}
            render={(
              <button
                type="button"
                onClick={btn1?.onClick}
                className="btn-primary">
                {btn1?.text}
              </button>
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
          <button onClick={btn2.onClick} type="button" className="btn-primary">
            <FontAwesomeIcon size="lg" icon={faPlus} />
            <span>{btn2.text}</span>
          </button>
        </div>
      </div>

      <HorizontalSeparator direction="down" />
    </div>
  );
};
