import { FC } from 'react';
import { AuthWrapper } from './components/Section';
import { LogoTitle } from './components/LogoTitle';
import { Form, Link } from 'react-router-dom';
import { FieldWithErrorMessage } from '../../components/FieldWithErrorMessage';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';


type FormValues = {
  name: string;
  lastName: string;
  rut: string;
  email: string;
  password: string;
  rePassword: string;
}

const validationSchema = Yup.object<FormValues>({
  name: Yup.string().required('Ingresa tus nombres'),
  lastName: Yup.string().required('Ingresa tus apellidos'),
  rut: Yup.string().required('Ingresa tu RUT'),
  email: Yup.string().email('Ingresa un correo válido').required('Ingresa tu correo'),
  password: Yup.string().min(6).required('Ingresa tu contraseña'),
  rePassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Las contraseñas no coinciden').required('Repite tu contraseña'),
});


export const Register: FC = () => {

  const handleSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    console.log(values);
    actions.resetForm();
    actions.setSubmitting(false);
  };

  return (
    <AuthWrapper>

      <Formik
        validationSchema={validationSchema}
        initialValues={{
          name: '',
          lastName: '',
          rut: '',
          email: '',
          password: '',
          rePassword: ''
        }}
        onSubmit={handleSubmit}>
        {() => (
          <Form className=" form-container -mt-4 w-[680px] flex flex-col gap-4">
            <ul className="flex flex-col gap-4">
              <li>
                <LogoTitle />
              </li>

              <li>
                <h2>Crea tu cuenta</h2>
                <p>Ingresa tus datos para comenzar</p>
              </li>
            </ul>

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

            <ul className="flex flex-col gap-2 mt-5 w-2/3 mx-auto">
              <li>
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Continuar
                </button>
              </li>

              <li>
                <Link className="btn-light-no-border" to="/login">Volver al Login</Link>
              </li>
            </ul>
          </Form>
        )}
      </Formik>
    </AuthWrapper>
  );
};
