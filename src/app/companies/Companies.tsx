import { FC } from 'react';
import { CreateSection } from '../../components/CreateSection';


export const Companies: FC = () => {
  return (
    <div>
      <CreateSection
        title="Empresas"
        subtitle="Estas son todas las empresas que existen en tu organización"
        btn1Text="Crear Empresa"
        btn2Text="Crear Empresa"
      />
    </div>
  );
};
