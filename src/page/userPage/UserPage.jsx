import UserData from '../../components/User/UserData';
import Logout from '../../components/User/Logout';
import PetsData from '../../components/User/PetsData';

import { DivWrapperMain, DivUserInfo, DivWrap, Title, Div, DivLogout } from './UserPage.styled';

function UserPage() {
  return (
    <>
      <DivWrapperMain>
        <DivWrap>
          <Title>My information:</Title>
          <DivUserInfo>
            <UserData />
            <DivLogout>
              <Logout />
            </DivLogout>
          </DivUserInfo>
        </DivWrap>
        <Div>
          <PetsData />
        </Div>
      </DivWrapperMain>
    </>

  );
}

export default UserPage;
