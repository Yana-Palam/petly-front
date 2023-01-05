import LiItem from './LiItem';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectUserData } from 'redux/auth/authSelectors';
import { ImgClose } from '../ModalAddsPet/ModalAddsPet.styled';
import celendar from '../../../assets/icons/calendar.svg';
import DatePicker from 'react-date-picker';

function UserDataItem() {
  const userInfo = useSelector(selectUserData);
  const [active, setActive] = useState(''); // name
  const [data, setData] = useState('')

  return (
    <ul>
      <LiItem
        active={active}
        setActive={setActive}
        name={'name'}
        label={'Name:'}
        user={userInfo.name}
      />

      <LiItem
        active={active}
        setActive={setActive}
        name={'email'}
        label={'Email:'}
        user={userInfo.email}
      />

      <LiItem
        active={active}
        setActive={setActive}
        name={'birthday'}
        label={'Birthday:'}
        user={userInfo.birthday}
      >
        <DatePicker
          clearIcon={null}
          calendarIcon={!active ? '' : <ImgClose src={celendar} alt='' />}
          format='dd.MM.yyyy'
          maxDate={new Date()}
          yearPlaceholder={'years'}
          monthPlaceholder={'months'}
          dayPlaceholder={'days'}
          value={data}
          onChange={value => {
            if (!value) {
              return;
            }
            setData(value)
            console.log('data1',value);
            }}
        />
      </LiItem>

      <LiItem
        active={active}
        setActive={setActive}
        name={'phone'}
        label={'Phone:'}
        user={userInfo.phone}
      />

      <LiItem
        active={active}
        setActive={setActive}
        name={'city'}
        label={'City:'}
        user={userInfo.city}
      />
    </ul>
  );
}

export default UserDataItem;
