import { FC } from 'react';
import { HorizontalSeparator } from '../../components/HorizontalSeparator';
import { ErrorMessage, Field, Form, Formik } from 'formik';
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

      <section className="overflow-auto px-14 py-12">
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


              <div className="grid grid-cols-2 gap-x-2">

                <ul className="col-span-1 px-6 py-8 w-full h-fit grid grid-cols-2 gap-x-8 gap-y-4">
                  <li className="col-span-2">
                    <FieldWithErrorMessage
                      name="organizationName"
                      type="text"
                      placeholder="Ingresa un nombre"
                      label="Nombre de la empresa"
                    />
                  </li>

                  <li>
                    <FieldWithErrorMessage
                      name="sii"
                      type="text"
                      placeholder="Ingresa tu numero"
                      label="Número Resolución Sii"
                    />
                  </li>

                  <li>
                    <FieldWithErrorMessage
                      name="siiDate"
                      type="date"
                      placeholder="Selecciona una fecha"
                      label="Fecha Resolución Sii"
                    />
                  </li>

                  <li className="col-span-2">
                    <FieldWithErrorMessage
                      name="socialReason"
                      type="text"
                      placeholder="Ingresa la razón social"
                      label="Razón Social"
                    />
                  </li>


                  <li className="col-span-2">
                    <FieldWithErrorMessage
                      name="giro"
                      type="text"
                      placeholder="Ingresa un giro"
                      label="Giro"
                    />
                  </li>
                </ul>

                <ul className="col-span-1 px-6 py-8  w-full h-fit grid grid-cols-2 gap-x-8 gap-y-4">
                  <li>
                    <FieldWithErrorMessage
                      name="rutCompany"
                      type="text"
                      placeholder="Ingresa un rut"
                      label="Rut Empresa"
                    />
                  </li>

                  <li>
                    <FieldWithErrorMessage
                      name="iatCode"
                      type="text"
                      placeholder="Ingresa un código"
                      label="Código IATA"
                    />
                  </li>

                  <li>
                    <label className="input-label" htmlFor="electronicInvoice">Afecto Sii Factura Electrónica</label>
                    <Field
                      id="electronicInvoice"
                      name="electronicInvoice"
                      as="select"
                      placeholder="Selecciona una opción"
                      className="input-primary"
                    >
                      <option value="red">Red</option>
                      <option value="green">Green</option>
                      <option value="blue">Blue</option>
                    </Field>
                    <div className="h-4">
                      <ErrorMessage name="electronicInvoice">
                        {(msg) => (
                          <p className="text-red-vlg-500">{msg}</p>
                        )}
                      </ErrorMessage>
                    </div>
                  </li>

                  <li className="col-span-2">
                    <FieldWithErrorMessage
                      name="address"
                      type="text"
                      placeholder="Ingresa una dirección"
                      label="Dirección"
                    />
                  </li>

                  <li>
                    <FieldWithErrorMessage
                      name="email"
                      type="email"
                      placeholder="Ingresa un correo"
                      label="Correo"
                    />
                  </li>

                  <li>
                    <FieldWithErrorMessage
                      name="phone"
                      type="password"
                      placeholder="Ingresa un teléfono"
                      label="Teléfono"
                    />
                  </li>
                </ul>
              </div>

              <HorizontalSeparator direction="down" />
            </Form>
          )}
        </Formik>
      </section>


      <div className="flex justify-end gap-6 px-14 py-8 border-t border-gray-vlg-200">
        <button className="btn-light w-40" onClick={onCancelar}>
          Cancelar
        </button>

        <button className="btn-primary w-40">
          Continuar
        </button>
      </div>
    </div>
  );
};
