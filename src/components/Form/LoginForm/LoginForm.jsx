import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { login } from 'redux/auth/authOperations';
import { selectAccessToken } from 'redux/auth/authSelectors';
import { AuthBtn } from './LoginForm.styled';
import { Form, Title, Text, RegisterLink, InputWrp } from './LoginForm.styled';

const inputs = [
  { type: 'email', name: 'email', label: 'Email' },
  { type: 'password', name: 'password', label: 'Password' },
];

const emailRegExp = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector(selectAccessToken);
  const stateError = useSelector(state => state.auth.error);
  const errorExist = () => {
    if (stateError.includes(409) === true) {
      return 'Электронная почта занята';
    }
    if (stateError.includes(400) === true) {
      return 'Ой извините, проблема с сервером';
    }
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email()
      .required()
      .min(10)
      .max(63)
      .matches(emailRegExp)
      .label('Email'),
    password: yup.string().min(7).max(32).required().label('Password'),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,

    onSubmit: event => {
      const email = event.email;
      const password = event.password;
      if (!isAuth) {
        dispatch(login({ email, password })).then(({ error }) => {
          !error && navigate('/user');
        });
      }
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Title>Login</Title>
        {stateError ? <span>{errorExist()}</span> : null}
        <InputWrp>
          {inputs.map(({ type, name, label }) => (
            <TextField
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
