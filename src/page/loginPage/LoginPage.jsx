import LoginForm from 'components/Form/LoginForm';
import { Wrapper } from './LoginPage.styled';
import { RegistBg } from 'page/loginPage/LoginPage.styled';

function LoginPage() {
  return (
    <RegistBg>
      <Wrapper>
        <LoginForm />
      </Wrapper>
    </RegistBg>
  );
}

export default LoginPage;
