import { FC } from 'react';
import { CreateModule } from '../../components/CreateModule';


export const Operations: FC = () => {
  return (
    <div>
      <CreateModule
        title="Operaciones"
        subtitle="Aquí se muestran todas las operaciones"
        btn2Text="Crear Empresa"
      />
    </div>
  );
};
