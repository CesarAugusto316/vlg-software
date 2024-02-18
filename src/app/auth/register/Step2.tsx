import { FC } from 'react';
import { AuthContainer } from '../components/AuthContainer';
import { LogoTitle } from '../components/LogoTitle';
import { Link } from 'react-router-dom';
import { FieldWithErrorMessage } from '../../../components/FieldWithErrorMessage';
import { Formik, FormikHelpers, Form } from 'formik';
import * as Yup from 'yup';
import { UserAccount } from '../../../models/UserAccount';
import { useVlgStore } from '../../../vlgStore/vlgStore';


type FormValues = Pick<UserAccount, 'orgnizationName'>

const initialValues: FormValues = {
  orgnizationName: '',
};

const validationSchema = Yup.object<FormValues>({
  organizationName: Yup.string().required('Ingresa tus nombres'),
});


export const Step2: FC = () => {
  const accountRegistration = useVlgStore(state => state.accountRegistration);
  const setAccountRegistration = useVlgStore(state => state.setAccountRegistration);


  const handleCreateAccount = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    setAccountRegistration(values);
    console.log(values, accountRegistration);

    actions.resetForm();
    actions.setSubmitting(false);
  };


  return (
    <AuthContainer>

      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleCreateAccount}
      >
        {() => (
          <Form className=" form-container -mt-4 w-[680px] flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <div>
                <LogoTitle />
              </div>

              <div>
                <h2>Crea tu cuenta</h2>
                <p>Ingresa tus datos para comenzar</p>
              </div>
            </div>

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
            </ul>

            <div className="flex flex-col gap-2 mt-5 w-2/3 mx-auto">
              <div>
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Continuar
                </button>
              </div>

              <div>
                <Link className="btn-light-no-border" to="/login">Volver al Login</Link>
              </div>
            </div>
          </Form>
        )}
      </Formik>

    </AuthContainer>
  );
};
