import { FC } from 'react';
import { HorizontalSeparator } from '../../components/HorizontalSeparator';
import { Form, Formik } from 'formik';
import { FieldWithErrorMessage } from '../../components/FieldWithErrorMessage';

interface CreateCompanyStepFormProps {
  onCancelar: () => void;
  onContinue: () => void;
}

export const CreateCompanyStepForm: FC<CreateCompanyStepFormProps> = ({ onCancelar }) => {
  // w-[900px] h-[calc(100vh-100px)] rounded-md
  // px-10 py-14
  return (
    <div className="bg-white  w-screen h-screen flex flex-col justify-between">

      <section className="overflow-auto px-10 py-12">
        <Formik
          // validationSchema={accountValidationSchema.concat(organizationValidationSchema)}
          initialValues={{}}
          onSubmit={() => { console.log('submit'); }}
        >
          {() => (
            <Form>
              <HorizontalSeparator direction="up">
                <div>
                  <h4 className="createSection__title">Crear Empresa</h4>

                  <div className="flex gap-10 items-cente">
                    <h5 className="font-medium  text-blue-vlg-900">
                      Datos de la empresa <br />
                      Empresa y monedas
                    </h5>

                    <h5>
                      Documentos contables <br />
                      Documentos y formularios
                    </h5>
                  </div>

                </div>
              </HorizontalSeparator>


              <div className="grid grid-cols-2">

                <ul className="col-span-1 px-6 py-8 w-full grid grid-cols-2 gap-x-8 gap-y-4">
                  <li>
                    <FieldWithErrorMessage
                      name="name"
                      type="text"
                      placeholder="Ingresa tus nombres"
                      label="Nombres"
                    />
                  </li>

                  <li>
                    <FieldWithErrorMessage
                      name="lastName"
                      type="text"
                      placeholder="Ingresa tus apellidos"
                      label="Apellidos"
                    />
                  </li>

                  <li>
                    <FieldWithErrorMessage
                      name="rut"
                      type="text"
                      placeholder="Sin puntos ni guión"
                      label="RUT"
                    />
                  </li>

                  <li>
                    <FieldWithErrorMessage
                      name="email"
                      type="email"
                      placeholder="Ingresa tu correo"
                      label="Correo"
                    />
                  </li>

                  <li>
                    <FieldWithErrorMessage
                      name="password"
                      type="password"
                      placeholder="Ingresa tu contraseña"
                      label="Contraseña"
                    />
                  </li>

                  <li>
                    <FieldWithErrorMessage
                      name="rePassword"
                      type="password"
                      placeholder="Repite tu contraseña"
                      label="Confirmar contraseña"
                    />
                  </li>

                  <li className="mt-4 col-span-2 border-t-2 border-gray-vlg-200 pt-6">
                    <FieldWithErrorMessage
                      name="organizationName"
                      type="text"
                      placeholder="Ingresa un nombre"
                      label="A qué organización perteneces?"
                    />

                  </li>
                </ul>

                <ul className="px-6 py-8 w-full grid grid-cols-2 gap-x-8 gap-y-4">
                  <li>
                    <FieldWithErrorMessage
                      name="name"
                      type="text"
                      placeholder="Ingresa tus nombres"
                      label="Nombres"
                    />
                  </li>

                  <li>
                    <FieldWithErrorMessage
                      name="lastName"
                      type="text"
                      placeholder="Ingresa tus apellidos"
                      label="Apellidos"
                    />
                  </li>

                  <li>
                    <FieldWithErrorMessage
                      name="rut"
                      type="text"
                      placeholder="Sin puntos ni guión"
                      label="RUT"
                    />
                  </li>

                  <li>
                    <FieldWithErrorMessage
                      name="email"
                      type="email"
                      placeholder="Ingresa tu correo"
                      label="Correo"
                    />
                  </li>

                  <li>
                    <FieldWithErrorMessage
                      name="password"
                      type="password"
                      placeholder="Ingresa tu contraseña"
                      label="Contraseña"
                    />
                  </li>

                  <li>
                    <FieldWithErrorMessage
                      name="rePassword"
                      type="password"
                      placeholder="Repite tu contraseña"
                      label="Confirmar contraseña"
                    />
                  </li>

                  <li className="mt-4 col-span-2 border-t-2 border-gray-vlg-200 pt-6">
                    <FieldWithErrorMessage
                      name="organizationName"
                      type="text"
                      placeholder="Ingresa un nombre"
                      label="A qué organización perteneces?"
                    />

                  </li>
                </ul>

              </div>


              <HorizontalSeparator direction="down" />
            </Form>
          )}
        </Formik>
      </section>


      <div className="flex justify-end gap-8 p-10 border-t border-gray-vlg-200">
        <button className="btn-light w-44" onClick={onCancelar}>
          Cancelar
        </button>

        <button className="btn-primary w-44">
          Continuar
        </button>
      </div>
    </div>
  );
};
