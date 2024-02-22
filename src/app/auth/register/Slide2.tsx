import { FC } from 'react';
import { LogoTitle } from '../components/LogoTitle';
import { Link, useSearchParams } from 'react-router-dom';
import { FieldWithErrorMessage } from '../../../components/FieldWithErrorMessage';
import { Formik, FormikHelpers, Form } from 'formik';
import * as Yup from 'yup';
import { AccountProfile } from '../../../models/AccountProfile';
import { useVlgStore } from '../../../vlgStore/vlgStore';
import { useSlides } from './useSlidesHook';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/firebaseConfig';
import { If } from '../../../components/utils/IfElse';


const searchParamsSchemma = Yup.object({
  microsoft:
    Yup.boolean()
      .optional()
      .transform((originalValue) => {
        // Coerce string to number if it's a parsable number
        if (typeof originalValue === 'string' && (originalValue === 'true' || originalValue === 'false')) {
          return JSON.parse(originalValue); // boolean
        }
        // Otherwise, leave it as is
        return undefined;
      }),
});


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
  const urlParams = useSearchParams();
  const isMicrosoftRegistration = searchParamsSchemma.validateSync(urlParams)?.microsoft ?? false;


  const handleCreateAccount = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
    try {
      if (!isMicrosoftRegistration) {
        await createUserWithEmailAndPassword(auth, accountProfile.email, accountProfile.password);
      }
      setAccountProfile({ ...values });
      // TODO: mutation to create organization
      actions.setSubmitting(false);
      actions.resetForm();
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
              <If
                condition={isMicrosoftRegistration}
                render={(
                  <h2>Completa tu cuenta</h2>
                )}
                elseRender={(
                  <h2>Crea tu cuenta</h2>
                )}
              />
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
                {/* SHOW LOADING MESSAGE WITH useQuery hook */}
                Crear cuenta
              </button>
            </li>

            <If
              condition={!isMicrosoftRegistration}
              render={(
                <li>
                  <button
                    type="button"
                    onClick={onPrevSlide}
                    className="btn-light-no-border">
                    Volver a Mis Datos
                  </button>
                </li>
              )}
            />

            <li>
              <Link className="btn-light-no-border" to="/login">Volver al Login</Link>
            </li>
          </ul>
        </Form>
      )}
    </Formik>
  );
};
