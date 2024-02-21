import { FC } from 'react';
import { CreateModule } from '../../components/CreateModule';


export const Companies: FC = () => {
  return (
    <div>
      <CreateModule
        title="Empresas"
        subtitle="Estas son todas las empresas que existen en tu organización"
        btn1Text="Crear Empresa"
        btn2Text="Crear Empresa"
      />
    </div>
  );
};
