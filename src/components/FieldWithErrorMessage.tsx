/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorMessage, Field, useFormikContext } from 'formik';
import { FC } from 'react';


type InputTypeAttribute = React.InputHTMLAttributes<HTMLInputElement>['type'];

interface FieldWithErrorMessageProps {
  name: string;
  type: InputTypeAttribute;
  placeholder: string;
  label: string
}

export const FieldWithErrorMessage: FC<FieldWithErrorMessageProps> = ({ name, type, placeholder, label }) => {
  const { errors, touched } = useFormikContext<{ [key: string]: string }>();

  return (
    <>
      <label htmlFor={name} className="input-label">{label}</label>
      <Field
        type={type}
        id={name}
        name={name}
        className={`${touched[name] && errors[name] ? 'input-error' : 'input-primary'}`}
        placeholder={placeholder}
      />
      <div className="h-4">
        <ErrorMessage name={name}>
          {(msg) => (
            <p className="text-red-vlg-500">{msg}</p>
          )}
        </ErrorMessage>
      </div>
    </>
  );
};
