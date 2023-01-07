import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import cn from 'classnames';
import { ReactComponent as EditIcon } from '../../../assets/icons/ci_edit.svg';
import { ReactComponent as PenIcon } from '../../../assets/icons/pen_edit.svg';
import { updateUserInfo } from '../../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { LiPicker, SpanPicker } from './UserDataItem.styled';

const BirthdayPicker = ({ active, setActive, user = '01.01.200', name }) => {
  const [data, setData] = useState();
  const dispatch = useDispatch();

  const onEditHandler = name => () => {
    dispatch(updateUserInfo({ [name]: toDateFormat(data, '/', '.') || user }));
    setActive('');
  };

  const onSetActiveHandler = name => () => setActive(name);

  const toDateFormat = (data, from, to) => {
    return new Date(data).toLocaleString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).replaceAll(from, to);
  };

  if (!user?.trim().length) return null;

  return (
    <LiPicker>
      <SpanPicker>Birthday:</SpanPicker>
      <DatePicker
        className={cn('birthday-picker', { 'birthday-picker-input': active === name })}
        style={{}}
        clearIcon={null}
        isOpen={active === name}
        calendarIcon={
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
        format='dd.MM.yyyy'
        maxDate={new Date()}
        value={data || new Date(user)}
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

// display: -webkit-box;
// display: -webkit-flex;
// display: -ms-flexbox;
// display: flex;
// -webkit-align-items: center;
// -webkit-box-align: center;
// -ms-flex-align: center;
// align-items: center;
// -webkit-box-pack: center;
// -webkit-justify-content: center;
// -ms-flex-pack: center;
// justify-content: center;
// background: #FDF7F2;
// border-radius: 50%;
// border: none;
// width: 30px;
// height: 30px;


// width: 143px;
// height: 24px;
// margin-right: 14px;
// padding-left: 12px;
// border: 1px solid transparent;
// font-weight: 400;
// -webkit-letter-spacing: 0.04em;
// -moz-letter-spacing: 0.04em;
// -ms-letter-spacing: 0.04em;
// letter-spacing: 0.04em;
// font-size: 14px;
// line-height: 19px;
// color: #111111;
// background-color: #FFFFFF;
// outline: none;
// background: #FDF7F2;
// border: 1px solid rgba(245,146,86,0.5);
// border-radius: 40px;
