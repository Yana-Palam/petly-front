import UserDataItem from '../UserDataItem';
import { Button, Div, DivPhoto, Span, ImgPhoto } from './UserData.styled';
import {ReactComponent as CameraIcon} from 'assets/icons/Camera.svg';
import { useSelector } from 'react-redux';

function UserData() {
  const userInfo = useSelector(state => state.userData.data)
  return (
    <Div>
      <DivPhoto>
        <ImgPhoto src={userInfo.avatarURL} alt='avatarUrl'/>
      </DivPhoto>
      <Button><CameraIcon  width='20' height='20'/><Span>Edit photo</Span></Button>
    <UserDataItem/>
    </Div>
  );
}

export default UserData;
