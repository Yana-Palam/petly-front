import AppRoutes from 'Routes/Routes';
import RegistrationForm from './Form/RegistrationForm';
import LoginForm from './Form/LoginForm/LoginForm';

export default function App() {
  return (
    <>
      <AppRoutes />
      {/* <RegistrationForm /> */}
      <LoginForm />
      <h1>Start Project Petly</h1>
    </>
  );
}
