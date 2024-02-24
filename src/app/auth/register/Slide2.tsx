import { FC } from 'react';
import { LogoTitle } from '../components/LogoTitle';
import { Link, useSearchParams } from 'react-router-dom';
import { FieldWithErrorMessage } from '../../../components/FieldWithErrorMessage';
import { Formik, FormikHelpers, Form } from 'formik';
import { useVlgStore } from '../../../vlgStore/vlgStore';
import { useSlides } from './useSlidesHook';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/firebaseConfig';
import { If } from '../../../components/utils/IfElse';
import { OrganizationFormValues, organizationValidationSchema } from './validationSchemma';


const initialValues: OrganizationFormValues = {
  organizationName: '',
};


export const Slide2: FC = () => {
  const accountProfile = useVlgStore(state => state.accountProfile);
  const setAccountProfile = useVlgStore(state => state.setAccountProfile);
  const onPrevSlide = useSlides(state => state.onPrevSlide);
  const onNextSlide = useSlides(state => state.onNextSlide);
  const [urlParams] = useSearchParams();
  console.log(urlParams.get('microsoft'));
  const isMicrosoftRegistration = Boolean(urlParams.get('microsoft')) ?? false;


  const handleCreateAccount = async (values: OrganizationFormValues, actions: FormikHelpers<OrganizationFormValues>) => {
    try {
      if (!isMicrosoftRegistration) {
        await createUserWithEmailAndPassword(auth, accountProfile.email, accountProfile.password);
      }
      setAccountProfile({ ...values });
      // TODO: mutation to create organization
      actions.setSubmitting(false);
      onNextSlide();
    }
    catch (error) {
      console.error(error);
    }
  };


  return (
    <Formik
      validationSchema={organizationValidationSchema}
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
