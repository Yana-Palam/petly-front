import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register, login } from 'redux/auth/authOperations';
import { Text, LoginLink, Title, Wrapper } from './RegistrationForm.styled';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

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
      console.log(data);
      const dataRegister = {
        email: data.email,
        password: data.password,
        name: data.name,
        city: data.city,
        phone: data.phone,
      };

      const dataLogin = {
        email: data.email,
        password: data.password,
      };

      dispatch(register(dataRegister)).then(({ error }) => {
        !error &&
          dispatch(login(dataLogin)).then(({ error }) => {
            !error && navigate('/user');
          });
      });

      // setData({
      //   email: '',
      //   password: '',
      //   confirmPassword: '',
      //   name: '',
      //   city: '',
      //   phone: '',
      // });

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

  return (
    <Wrapper>
      <Title>Registration</Title>
      {steps[currentStep]}
      <Text>
        Already have an account?
        <LoginLink to="/login">Login</LoginLink>
      </Text>
    </Wrapper>
  );
};

export default RegistrationForm;
