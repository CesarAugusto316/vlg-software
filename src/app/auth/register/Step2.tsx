import { FC } from 'react';
import { AuthContainer } from '../components/AuthContainer';
import { LogoTitle } from '../components/LogoTitle';
import { Link } from 'react-router-dom';
import { FieldWithErrorMessage } from '../../../components/FieldWithErrorMessage';
import { Formik, FormikHelpers, Form } from 'formik';
import * as Yup from 'yup';
import { UserAccount } from '../../../models/UserAccount';
import { useVlgStore } from '../../../vlgStore/vlgStore';


type FormValues = Pick<UserAccount, 'organizationName'>

const initialValues: FormValues = {
  organizationName: '',
};

const validationSchema = Yup.object<FormValues>({
  organizationName: Yup.string().required('Ingresa un nombre'),
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
                <Link className="btn-light-no-border" to="/login">Volver a Mis Datos</Link>
              </li>

              <li>
                <Link className="btn-light-no-border" to="/login">Volver al Login</Link>
              </li>
            </ul>
          </Form>
        )}
      </Formik>

    </AuthContainer>
  );
};
