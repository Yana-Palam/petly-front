import Container from 'components/Common/Container';
import UserData from '../../components/User/UserData';
import Logout from '../../components/User/Logout';
import PetsData from '../../components/User/PetsData';

import { DivWrapperMain, DivUserInfo, DivWrap, Title } from './UserPage.styled';

function UserPage() {
  return (
      <Container>
        <DivWrapperMain>
          <DivWrap>
            <Title>My information:</Title>
            <DivUserInfo>
              <UserData />
              <Logout />
            </DivUserInfo>
          </DivWrap>
          <PetsData />
        </DivWrapperMain>
      </Container>
  );
}

export default UserPage;
