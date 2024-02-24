import { FC } from 'react';
import { HorizontalSeparator } from '../../components/HorizontalSeparator';
import { Formik } from 'formik';
import { Form } from 'react-router-dom';
import { FieldWithErrorMessage } from '../../components/FieldWithErrorMessage';
import { AccountProfileFormValues, validationSchema } from '../auth/register/validationSchemma';
import { useVlgStore } from '../../vlgStore/vlgStore';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';


export const AccountProfile: FC = () => {
  const accountProfile = useVlgStore(state => state.accountProfile);
  const resetAccountProfile = useVlgStore(state => state.resetAccountProfile);


  const initialValues: AccountProfileFormValues = {
    name: accountProfile.name ?? '',
    lastName: accountProfile.lastName ?? '',
    rut: accountProfile.rut ?? '',
    email: accountProfile.email ?? '',
    password: accountProfile.password ?? '',
    rePassword: accountProfile.password ?? '',
  };


  const handleSignOut = async () => {
    try {
      await signOut(auth);
      resetAccountProfile();
    } catch (error) {
      console.error('Error signing out', error);
    }
  };


  return (
    <div>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={() => undefined}
      >
        {() => (
          <>
            <HorizontalSeparator direction="up">
              <div>
                <h4 className="createSection__title">
                  Datos de Usuario
                </h4>
                <p className="createSection__sub-title">
                  Puedes realizar cambios en cualquier momento
                </p>
              </div>
            </HorizontalSeparator>

            <Form className="px-6 py-8 w-[680px] flex flex-col gap-4">
              <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
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
            </Form>

            <HorizontalSeparator direction="down" />

            <section className="py-8 px-6 flex items-center justify-between">
              <button
                type="button"
                onClick={handleSignOut}
                className="btn-primary max-w-32"
              >
                Sign Out
              </button>

              <button
                type="submit"
                className="btn-primary max-w-44"
              >
                Guardar cambios
              </button>
            </section>
          </>
        )}
      </Formik>
    </div>
  );
};
