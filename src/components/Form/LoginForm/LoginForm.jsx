import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from 'redux/auth/authOperations';
import { selectAccessToken } from 'redux/auth/authSelectors';
import { AuthBtn } from './LoginForm.styled';
import {
  Form,
  Title,
  Text,
  RegisterLink,
  InputWrp,
  Input,
} from './LoginForm.styled';

const inputs = [
  { type: 'email', name: 'email', label: 'Email' },
  { type: 'password', name: 'password', label: 'Password' },
];
const passwordRexExp = /^[a-zA-Z0-9]+$/;

const emailRegExp = /^[a-zA-Z0-9\._-]{2,}@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$/;

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuth = useSelector(selectAccessToken);

  const validationSchema = yup.object().shape({
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
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,

    onSubmit: async values => {
      if (!isAuth) {
        dispatch(login(values)).then(({ error }) => {
          !error && navigate('/user');
        });
      }
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
              label={label}
              value={formik.values[name]}
              onChange={formik.handleChange}
              error={formik.touched[name] && Boolean(formik.errors[name])}
              helperText={formik.touched[name] && formik.errors[name]}
              variant="outlined"
            />
          ))}
        </InputWrp>
        <AuthBtn type="submit">Login</AuthBtn>
        <Text>
          Don't have an account?{' '}
          <RegisterLink to="/register">Register</RegisterLink>
        </Text>
      </Form>
    </>
  );
};

export default LoginForm;
