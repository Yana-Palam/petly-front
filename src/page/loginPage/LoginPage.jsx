import Container from '../../components/Common/Container/Container';
import LoginForm from 'components/Form/LoginForm';
import { Wrapper } from './LoginPage.styled';

function LoginPage() {
  return (
    <div>
      <Container>
        <Wrapper>
          <LoginForm />
        </Wrapper>
      </Container>
    </div>
  );
}

export default LoginPage;
