import { FC } from 'react';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons/faMicrosoft';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthContainer } from '../components/AuthContainer';
import { LogoTitle } from '../components/LogoTitle';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import { FieldWithErrorMessage } from '../../../components/FieldWithErrorMessage';
// firebase
import { auth } from '../../../firebase/firebaseConfig';
import { OAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { tenant } from '../../../constants';
import { AccountProfile } from '../../../models/AccountProfile';


const authProvider = new OAuthProvider('microsoft.com');
authProvider.addScope('mail.read');
authProvider.setCustomParameters({ prompt: 'consent', tenant });


type FormValues =
  Pick<AccountProfile, (
    'email' |
    'password' |
    'remember'
  )>

const validationSchema = Yup.object<FormValues>({
  email: Yup.string().email('Ingresa un correo válido').required('Ingresa tu correo'),
  password: Yup.string().min(6).required('Ingresa tu contraseña'),
  remember: Yup.boolean().optional().default(false),
});


export const Login: FC = () => {

  const handleEmailAndPassWordLogin = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, values.email, values.password);
      console.log(user);
      actions.resetForm();
      actions.setSubmitting(false);
    }
    catch (error) {
      console.log(error);
    }
  };

  const handleMicrosoftLogin = async () => {
    try {
      const { user } = await signInWithPopup(auth, authProvider);
      console.log(user);
    }
    catch (error) {
      console.log(error);
    }
  };


  return (
    <AuthContainer>
      <Formik
        onSubmit={handleEmailAndPassWordLogin}
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
                <button onClick={handleMicrosoftLogin} type="button" className="btn-light">
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

              <li className="mt-4">
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
    </AuthContainer>
  );
};
