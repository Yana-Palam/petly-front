import UserDataItem from '../UserDataItem';
import { Button, Div, DivPhoto, Span, ImgPhoto, DivWrap, ImgAddFoto, EditWrap } from './UserData.styled';
import { ReactComponent as CameraIcon } from 'assets/icons/Camera.svg';
import addIcon from 'assets/icons/addFoto.svg';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInfo } from '../../../redux/userData/userDataOperation';

function UserData() {
  const userPhoto = useSelector(state => state.userData.data.avatarUrl);
  const dispatch = useDispatch();


  const onChangeHandler = (e) => {
    const formData = new FormData();
    formData.append('avatar', e.target.files[0]);
    dispatch(updateUserInfo(formData));
  };

  return (
    <Div>
      <DivWrap>
        <DivPhoto>
          {
            userPhoto
              ?
              <ImgPhoto src={userPhoto} alt='photo' />
              :
              <ImgAddFoto src={addIcon} alt='' />
          }
        </DivPhoto>

        <Button>
          <label htmlFor='image_uploads'>
            <EditWrap> <CameraIcon width='20' height='20' /><Span>Edit photo</Span></EditWrap>
          </label>
          <input
            type='file'
            id='image_uploads'
            name='image_uploads'
            style={{ opacity: 0, width: 0, height: 0 }}
            onChange={onChangeHandler}
          />
        </Button>
      </DivWrap>
      <UserDataItem />
    </Div>
  );
}

export default UserData;
