import { useFormik } from 'formik';
import * as yup from 'yup';

import Button from 'components/Common/Button/Button';
import {
  Form,
  Input,
  Title,
  Text,
  RegisterLink,
  InputWrp,
} from './LoginForm.styled';

const inputs = [
  { type: 'email', name: 'email', label: 'Email' },
  { type: 'password', name: 'password', label: 'Password' },
];

const LoginForm = () => {
  const validationSchema = yup.object().shape({
    email: yup.string().email().required().min(10).max(63),
    password: yup.string().min(7).max(32).required(),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,

    onSubmit: event => {
      console.log(event);
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Title>Login</Title>
        <InputWrp>
          {inputs.map(({ type, name, label }) => (
            <Input
              key={name}
              type={type}
              name={name}
              placeholder={label}
              value={formik.values[name]}
              onChange={formik.handleChange}
              error={formik.touched[name] && Boolean(formik.errors[name])}
              helperText={formik.touched[name] && formik.errors[name]}
            />
          ))}
        </InputWrp>
        <Button
          type="submit"
          style={{
            width: '100%',
            height: '48px',
          }}
        >
          Login
        </Button>
        <Text>
          Don't have an account? <RegisterLink to="/">Register</RegisterLink>
        </Text>
      </Form>
    </>
  );
};

export default LoginForm;
