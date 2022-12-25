import { useState } from 'react';
import { Text, LoginLink, Title, Wrapper } from './RegistrationForm.styled';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

const RegistrationForm = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
    city: '',
    phone: '',
  });

  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = (newData, final = false) => {
    setData(prev => ({ ...prev, ...newData }));

    if (final) {
      console.log(data);
      // dispatch(register({ data })).then(({ error }) => {
      //   !error && navigate('/login'); // if no error (success) redirect ot login page
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
