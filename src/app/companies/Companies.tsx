import { FC, useState } from 'react';
import { CreateSection } from '../../components/CreateSection';
import { Modal } from '../../components/Modal';


export const Companies: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <CreateSection
        title="Empresas"
        subtitle="Estas son todas las empresas que existen en tu organización"
        btn1={{ text: 'Crear Empresa', onClick: () => setIsOpen(true) }}
        btn2={{ text: 'Crear Empresa', onClick: () => setIsOpen(true) }}
      />

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="bg-white p-6 rounded-lg">
          <h1>Modal</h1>
        </div>
      </Modal>
    </div>
  );
};
