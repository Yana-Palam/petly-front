import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from 'redux/auth/authOperations';
import { selectAccessToken } from 'redux/auth/authSelectors';
import { AuthBtn } from './LoginForm.styled';
import {
  FormWrapper,
  Form,
  Title,
  Text,
  AuthLink,
  InputsWrp,
  InputWrapper,
  TextError,
  Input,
  EyeBtn,
  IconEye,
  IconEyeSlash,
} from './LoginForm.styled';
import { motion } from 'framer-motion';

const inputs = [
  { type: 'email', name: 'email', label: 'Email' },
  { type: 'password', name: 'password', label: 'Password' },
];
const passwordRexExp = /^[a-zA-Z0-9]+$/;

const emailRegExp = /^[a-zA-Z0-9]+[a-zA-Z0-9_-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$/;

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(true);

  const changeVisiblePassword = () => {
    setShowPassword(prev => !prev);
  };

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
    <FormWrapper
      as={motion.div}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <Form onSubmit={formik.handleSubmit}>
        <Title>Login</Title>
        <InputsWrp>
          {inputs.map(({ type, name, label }) => (
            <InputWrapper key={name}>
              <Input
                type={type === 'password' && showPassword ? type : 'text'}
                name={name}
                placeholder={label}
                value={formik.values[name]}
                onChange={formik.handleChange}
                error={formik.touched[name] && Boolean(formik.errors[name])}
              />
              {formik.touched[name] && formik.errors[name] && (
                <TextError>{formik.errors[name]}</TextError>
              )}
              {type === 'password' && (
                <EyeBtn type="button" onClick={changeVisiblePassword}>
                  {showPassword ? (
                    <IconEye size="26px" />
                  ) : (
                    <IconEyeSlash size="26px" />
                  )}
                </EyeBtn>
              )}
            </InputWrapper>
          ))}
        </InputsWrp>
        <AuthBtn type="submit">Login</AuthBtn>
        <Text>
          Don't have an account? <AuthLink to="/register">Register</AuthLink>
        </Text>
      </Form>
    </FormWrapper>
  );
};

export default LoginForm;
