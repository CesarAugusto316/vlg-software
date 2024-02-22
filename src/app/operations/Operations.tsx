import { FC } from 'react';
import { CreateSection } from '../../components/CreateSection';


export const Operations: FC = () => {
  return (
    <div>
      <CreateSection
        title="Operaciones"
        subtitle="Aquí se muestran todas las operaciones"
        btn2Text="Crear Empresa"
      />
    </div>
  );
};
