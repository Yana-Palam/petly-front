import Container from '../../components/Common/Container/Container';
import RegistrationForm from 'components/Form/RegistrationForm';
import { Wrapper } from 'page/loginPage/LoginPage.styled';

function RegisterPage() {
  return (
    <>
      <Container>
        <Wrapper>
          <RegistrationForm />
        </Wrapper>
      </Container>
    </>
  );
}

export default RegisterPage;
