import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import { ReactComponent as EditIcon } from '../../../assets/icons/ci_edit.svg';
import { ReactComponent as PenIcon } from '../../../assets/icons/pen_edit.svg';
import { updateUserInfo } from '../../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { Button, LiPicker, SpanPicker } from './UserDataItem.styled';

const BirthdayPicker = ({ active, setActive, user, name }) => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  const onEditHandler = name => () => {
    dispatch(updateUserInfo({ [name]: toDateFormat(data) || user }));
    setActive('');
  };

  const onSetActiveHandler = name => () => setActive(name);

  const toDateFormat = (data) => {
    return new Date(data).toLocaleString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).replaceAll('/', '.');
  };

  return (
    <LiPicker>
      <SpanPicker>Birthday:</SpanPicker>
      <DatePicker
        style={{}}
        clearIcon={null}
        isOpen={active === name}
        calendarIcon={
          <Button>
            {
              active === name ? (

                <EditIcon onClick={onEditHandler(name)} />
              ) : (
                <PenIcon
                  onClick={onSetActiveHandler(name)}
                  fill={
                    active && active !== name ? 'rgba(17, 17, 17, 0.6)' : '#F59256'
                  }
                />
              )
            }
          </Button>
        }
        format='dd.MM.yyyy'
        maxDate={new Date()}
        value={new Date(user)}
        onChange={(value) => {
          if (value) {
            setData(value);
          }
        }}
      />
    </LiPicker>

  );
};

export default BirthdayPicker;
