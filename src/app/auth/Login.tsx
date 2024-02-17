import { FC } from 'react';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons/faMicrosoft';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthWrapper } from './components/Section';
import { LogoTitle } from './components/LogoTitle';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import { FieldWithErrorMessage } from '../../components/FieldWithErrorMessage';


type FormValues = {
  email: string;
  password: string;
  remember: boolean;
}

const validationSchema = Yup.object<FormValues>({
  email: Yup.string().email('Ingresa un correo válido').required('Ingresa tu correo'),
  password: Yup.string().min(6).required('Ingresa tu contraseña'),
  remember: Yup.boolean().optional().default(false),
});


export const Login: FC = () => {

  const handleSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    console.log(values);
    actions.resetForm();
    actions.setSubmitting(false);
  };

  return (
    <AuthWrapper>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        initialValues={{ email: '', password: '', remember: false }}
      >
        {() => (
          <Form className=" form-container -mt-4 w-[448px]">
            <ul className="flex flex-col gap-4">
              <li>
                <LogoTitle />
              </li>

              <li>
                <h2>Bienvenido!</h2>
                <p>No tienes cuenta VLG? <Link to={'/register'}>Crea una ahora</Link></p>
              </li>

              <li>
                <button type="button" className="btn-light">
                  <FontAwesomeIcon size="lg" icon={faMicrosoft} />
                  <span>Ingresar con Microsoft</span>
                </button>
              </li>

              <li className="flex items-center justify-between">
                <p>También puedes ingresar usando:</p>
                <hr className="w-1/3" />
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

              <li className="flex items-center">
                <div className="flex items-center h-5">
                  <Field
                    id="remember"
                    name="remember"
                    type="checkbox"
                    className="checkbox-primary"
                  />
                </div>
                <label htmlFor="remember" className="checkbox-label">Recordarme</label>
              </li>

              <li className="mt-2">
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Ingresar
                </button>
              </li>
            </ul>

          </Form>
        )}
      </Formik>
    </AuthWrapper>
  );
};
