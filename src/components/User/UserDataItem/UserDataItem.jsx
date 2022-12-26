import LiItem from './LiItem';
import { useSelector } from 'react-redux';

function UserDataItem() {
  const userInfo = useSelector(state => state.userData.data)

  return (
      <ul>
       <LiItem name={'name'} label={'Name:'} user={userInfo.name}/>
       <LiItem name={'email'} label={'Email:'} user={userInfo.email}/>
       <LiItem name={'birthday'} label={'Birthday:'} user={userInfo.birthday}/>
       <LiItem name={'phone'} label={'Phone:'} user={userInfo.phone}/>
       <LiItem name={'city'} label={'City:'} user={userInfo.city}/>
      </ul>
  );
}

export default UserDataItem;
