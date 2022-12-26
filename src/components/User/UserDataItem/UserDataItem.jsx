import LiItem from './LiItem';
import { useSelector } from 'react-redux';

function UserDataItem() {
  const userInfo = useSelector(state => state.user.data)
  console.log('userInfo', userInfo);

  return (
      <ul>
       <LiItem name={'name'} label={'Name:'} defVal="Anna"/>
       <LiItem name={'email'} label={'Email:'} defVal="anna00@gmail.com"/>
       <LiItem name={'birthday'} label={'Birthday:'} defVal="22.06.2019"/>
       <LiItem name={'phone'} label={'Phone:'} defVal="+38000000000"/>
       <LiItem name={'city'} label={'City:'} defVal="Kiev"/>
      </ul>
  );
}

export default UserDataItem;
