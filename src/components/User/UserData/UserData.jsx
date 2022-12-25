import UserDataItem from '../UserDataItem';
import { Button, Div, DivPhoto, ImgCamera, ImgPhoto } from './UserData.styled';
import cameraIcon from 'assets/icons/Camera.svg';

function UserData() {
  return (
    <Div>
      <DivPhoto>
        <ImgPhoto src='https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMjI0MDQ4MzA2MDQ0/cover-wonder-woman-ftr.jpg' alt=''/>
      </DivPhoto>
      <Button><ImgCamera src={cameraIcon} alt=''/>Edit photo</Button>
    <UserDataItem/>
    </Div>
  );
}

export default UserData;
