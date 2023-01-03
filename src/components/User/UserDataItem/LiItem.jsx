import React, { useRef, useState } from 'react';
import { Button, Input, Label, Item } from './UserDataItem.styled';
import { ReactComponent as PenIcon } from 'assets/icons/pen_edit.svg';
import { ReactComponent as EditIcon } from 'assets/icons/ci_edit.svg';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from '../../../redux/userData/userDataOperation';
import useOutsideClick from '../../../hooks/useOutsideHook/useOutsideHook';

const LiItem = ({ label, name, user, active, setActive }) => {
  const [value, setValue] = useState('');
  const wrapperRef = useRef(null);
  const dispatch = useDispatch();
  const outsideClickHandler = () => {
    setValue(user);
    setActive('');
  };

  useOutsideClick(wrapperRef, outsideClickHandler);

  const onChangeHandler = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setValue(value);
        break;

      case 'email':
        setValue(value);
        break;

      case 'birthday':
        setValue(value);
        break;

      case 'phone':
        setValue(value);
        break;

      case 'city':
        setValue(value);
        break;

      default:
        return;
    }
  };

  const onEditHandler = (name) => () => {
    dispatch(updateUserInfo({ [name]: value || user }));
    setActive('');
  };

  const onSetActiveHandler = (name) => () => setActive(name);

  return (
    <Item ref={active === name ? wrapperRef : null}>
      <Label htmlFor={name}>{label}</Label>
      <Input active={active === name} disabled={active !== name} type='text' name={name} value={value || user}
             onChange={onChangeHandler} />
      <Button>
        {active === name
          ?
          <EditIcon onClick={onEditHandler(name)} />
          :
          <PenIcon onClick={onSetActiveHandler(name)}
                   fill={active && active !== name ? 'rgba(17, 17, 17, 0.6)' : '#F59256'} />
        }
      </Button>
    </Item>
  );
};

export default LiItem;
