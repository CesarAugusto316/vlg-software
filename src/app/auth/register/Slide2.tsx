import { FC } from 'react';
import { LogoTitle } from '../components/LogoTitle';
import { Link } from 'react-router-dom';
import { FieldWithErrorMessage } from '../../../components/FieldWithErrorMessage';
import { Formik, FormikHelpers, Form } from 'formik';
import * as Yup from 'yup';
import { AccountProfile } from '../../../models/AccountProfile';
import { useVlgStore } from '../../../vlgStore/vlgStore';
import { useSlides } from './useSlidesHook';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/firebaseConfig';


type FormValues = Pick<AccountProfile, 'organizationName'>

const initialValues: FormValues = {
  organizationName: '',
};

const validationSchema = Yup.object<FormValues>({
  organizationName: Yup.string().required('Ingresa un nombre'),
});


export const Slide2: FC = () => {
  const accountProfile = useVlgStore(state => state.accountProfile);
  const setAccountProfile = useVlgStore(state => state.setAccountProfile);
  const onPrevSlide = useSlides(state => state.onPrevSlide);
  const onNextSlide = useSlides(state => state.onNextSlide);


  const handleCreateAccount = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
    try {
      const { user: userCredentials } = await createUserWithEmailAndPassword(auth, accountProfile.email, accountProfile.password);
      const idToken = await userCredentials.getIdToken();
      actions.setSubmitting(false);
      actions.resetForm();
      setAccountProfile({ ...values, uuid: userCredentials.uid, accessToken: idToken });
      onNextSlide();
    }
    catch (error) {
      console.error(error);
    }
  };


  return (
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
              <p>Ahora los datos de tu organización</p>
            </div>
          </div>

          <div className="mb-14">
            <FieldWithErrorMessage
              name="organizationName"
              type="text"
              placeholder="Ingresa un nombre"
              label="¿Cuál es el nombre de tu organización?"
            />
          </div>

          <ul className="flex flex-col gap-2 mt-5 w-2/3 mx-auto">
            <li>
              <button
                type="submit"
                className="btn-primary"
              >
                Crear cuenta
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={onPrevSlide}
                className="btn-light-no-border">
                Volver a Mis Datos
              </button>
            </li>

            <li>
              <Link className="btn-light-no-border" to="/login">Volver al Login</Link>
            </li>
          </ul>
        </Form>
      )}
    </Formik>
  );
};
