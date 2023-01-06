import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register, login, google } from 'redux/auth/authOperations';
import {
  Text,
  AuthLink,
  Title,
  StyledBtnGoogle,
} from '../LoginForm/LoginForm.styled';
import { Wrapper } from './RegistrationForm.styled';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    city: '',
    phone: '',
  });

  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = (newData, final = false) => {
    setData(prev => ({ ...prev, ...newData }));

    if (final) {
      const dataLogin = {
        email: newData.email,
        password: newData.password,
      };

      dispatch(register(newData)).then(({ error }) => {
        !error &&
          dispatch(login(dataLogin)).then(({ error }) => {
            !error && navigate('/user');
          });
      });

      return;
    }

    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = newData => {
    setData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
  };

  const steps = [
    <StepOne next={handleNextStep} data={data} />,
    <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  const onClickGoogle = () => {
    dispatch(google());
  };

  return (
    <Wrapper
      as={motion.div}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <Title>Registration</Title>
      {steps[currentStep]}
      <Text>
        Already have an account?
        <AuthLink to="/login">Login</AuthLink>
      </Text>
      <StyledBtnGoogle onClick={onClickGoogle} type="button">
        <FcGoogle size="45px" /> Continue with Google
      </StyledBtnGoogle>
    </Wrapper>
  );
};

export default RegistrationForm;
