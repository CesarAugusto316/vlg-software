import { FC } from 'react';


export const Companies: FC = () => {
  return (
    <div>
      <section className="flex gap-4 justify-between bg-gray-vlg-100/65 py-5 px-6 rounded-t-xl border-b-2 border-gray-vlg-200">

        <div>
          <h4 className="text-blue-vlg-900 mb-2 font-bold">Empresas</h4>
          <p className="text-sm">Estas son todas las empresas que existen en tu organización</p>
        </div>

        <div>
          <button className="btn-primary">Crear Empresa</button>
        </div>
      </section>
      <div>

      </div>
    </div>
  );
};
