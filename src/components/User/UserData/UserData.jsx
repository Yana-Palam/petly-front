import UserDataItem from '../UserDataItem';
import { Button, Div, DivPhoto, ImgCamera, ImgPhoto } from './UserData.styled';
import cameraIcon from 'assets/icons/Camera.svg';
import { useSelector } from 'react-redux';

function UserData() {
  const userInfo = useSelector(state => state.userData.data)

  return (
    <Div>
      <DivPhoto>
        <ImgPhoto src={userInfo.avatarURL} alt=''/>
      </DivPhoto>
      <Button><ImgCamera src={cameraIcon} alt=''/>Edit photo</Button>
    <UserDataItem/>
    </Div>
  );
}

export default UserData;
