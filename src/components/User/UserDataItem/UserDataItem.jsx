import LiItem from './LiItem';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function UserDataItem() {
  const userInfo = useSelector(state => state.userData.data)
  const [active, setActive] = useState(''); // name
  return (
      <ul>
       <LiItem active={active} setActive={setActive} name={'name'} label={'Name:'} user={userInfo.name}/>
       <LiItem active={active} setActive={setActive} name={'email'} label={'Email:'} user={userInfo.email}/>
       <LiItem active={active} setActive={setActive} name={'birthday'} label={'Birthday:'} user={userInfo.birthday}/>
       <LiItem active={active} setActive={setActive} name={'phone'} label={'Phone:'} user={userInfo.phone}/>
       <LiItem active={active} setActive={setActive} name={'city'} label={'City:'} user={userInfo.city}/>
      </ul>
  );
}

export default UserDataItem;
