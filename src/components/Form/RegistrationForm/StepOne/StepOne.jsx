import { useFormik } from 'formik';
import * as yup from 'yup';
import { Form } from '../RegistrationForm.styled';
import {
  InputsWrp,
  Input,
  AuthBtn,
  InputWrapper,
  TextError,
} from 'components/Form/LoginForm/LoginForm.styled';

const inputs = [
  { type: 'email', name: 'email', label: 'Email' },
  { type: 'password', name: 'password', label: 'Password' },
  { type: 'password', name: 'confirmPassword', label: 'ConfirmPassword' },
];

const StepOne = ({ next, data }) => {
  const passwordRexExp = /^[a-zA-Z0-9]+$/;
  const emailRegExp = /^[a-zA-Z0-9]+[a-zA-Z0-9_-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$/;

  const stepOneValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email()
      .required()
      .min(10)
      .max(63)
      .matches(emailRegExp, 'Email is not valid')
      .label('Email'),
    password: yup
      .string()
      .min(7)
      .max(32)
      .matches(passwordRexExp, 'Password is not valid')
      .required()
      .label('Password'),
    confirmPassword: yup
      .string()
      .required()
      .test(
        'checkEqualityPasswords',
        'Both password need to be the same',
        function (value) {
          if (this?.options?.parent?.password !== value) {
            return false;
          }
          return true;
        }
      )
      .label('Confirm password'),
  });

  const formik = useFormik({
    initialValues: data,
    validationSchema: stepOneValidationSchema,

    onSubmit: values => {
      next(values);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <InputsWrp>
        {inputs.map(({ type, name, label }) => (
          <InputWrapper key={name}>
            <Input
              type={type}
              name={name}
              value={formik.values[name]}
              onChange={formik.handleChange}
              error={formik.touched[name] && Boolean(formik.errors[name])}
              placeholder={label}
            />
            {formik.touched[name] && formik.errors[name] && (
              <TextError>{formik.errors[name]}</TextError>
            )}
          </InputWrapper>
        ))}
      </InputsWrp>
      <AuthBtn type="submit">Next</AuthBtn>
    </Form>
  );
};

export default StepOne;
