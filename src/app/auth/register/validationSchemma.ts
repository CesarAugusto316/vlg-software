import * as Yup from 'yup';
import { AccountProfile } from '../../../models/AccountProfile';


export interface AccountProfileFormValues extends Pick<AccountProfile, (
  'name' |
  'lastName' |
  'rut' |
  'email' |
  'password'
)> {
  rePassword: string;
}


export const validationSchema = Yup.object<AccountProfileFormValues>({
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
