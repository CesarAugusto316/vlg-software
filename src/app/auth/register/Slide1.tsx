import { FC } from 'react';
import { LogoTitle } from '../components/LogoTitle';
import { Link } from 'react-router-dom';
import { FieldWithErrorMessage } from '../../../components/FieldWithErrorMessage';
import { Formik, FormikHelpers, Form } from 'formik';
import * as Yup from 'yup';
import { AccountProfile } from '../../../models/AccountProfile';
import { useVlgStore } from '../../../vlgStore/vlgStore';
import { useSlides } from './useSlidesHook';


interface FormValues extends Pick<AccountProfile, (
  'name' |
  'lastName' |
  'rut' |
  'email' |
  'password'
)> {
  rePassword: string;
}


const validationSchema = Yup.object<FormValues>({
  name: Yup.string().required('Ingresa tus nombres'),
  lastName: Yup.string().required('Ingresa tus apellidos'),
  rut: Yup.string().required('Ingresa tu RUT'),
  email: Yup.string().email('Ingresa un correo válido').required('Ingresa tu correo'),
  password: Yup.string().min(6).required('Ingresa tu contraseña'),
  rePassword:
    Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Las contraseñas no coinciden')
      .required('Repite tu contraseña'),
});


export const Slide1: FC = () => {
  const accountProfile = useVlgStore(state => state.accountProfile);
  const setAccountProfile = useVlgStore(state => state.setAccountProfile);
  const onNextSlide = useSlides(state => state.onNextSlide);

  const initialValues: FormValues = {
    name: accountProfile.name ?? '',
    lastName: accountProfile.lastName ?? '',
    rut: accountProfile.rut ?? '',
    email: accountProfile.email ?? '',
    password: accountProfile.password ?? '',
    rePassword: accountProfile.password ?? '',
  };

  const handleNextStep = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    setAccountProfile(values);
    actions.setSubmitting(true);
    onNextSlide();
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleNextStep}
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
                // onClick={onNextSlide}
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
  );
};
