import { FC } from 'react';
import vlgLogo from '../../../assets/icons/vlg-logo.png';


export const LogoTitle: FC = () => {
  return (
    <div className="flex items-center gap-2">
      <img
        className="w-11 h-11 shadow-md-light"
        src={vlgLogo}
        alt="vlg-logo"
      />
      <h2 className="text-blue-vlg-900 ">VLG Software</h2>
    </div>
  );
};
