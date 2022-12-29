import React, { useState } from 'react';
import { Button, Input, Label, Item } from './UserDataItem.styled';
import {ReactComponent as PenIcon} from 'assets/icons/pen_edit.svg';
import {ReactComponent as EditIcon} from 'assets/icons/ci_edit.svg';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from '../../../redux/userData/userDataOperation';

const LiItem = ({ label, name, user, active, setActive }) => {
  const [value, setValue] = useState(user);

  const dispatch = useDispatch()

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
    dispatch(updateUserInfo({ [name]: value }));
    setActive('');
  };

  const onSetActiveHandler = (name) => () => setActive(name);

  return (
    <Item>
      <Label htmlFor={name}>{label}</Label>
      <Input active={active === name} disabled={active !== name} type='text' name={name} value={value} onChange={onChangeHandler} />
      <Button >
        { active === name
          ?
          <EditIcon onClick={onEditHandler(name)}/>
          :
          <PenIcon onClick={onSetActiveHandler(name)} fill='#F59256'/>
        }
      </Button>
    </Item>
  );
};

export default LiItem;
