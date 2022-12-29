import React, { useState } from 'react';
import { Button, Input, Label, Item } from './UserDataItem.styled';
import {ReactComponent as PenIcon} from 'assets/icons/pen_edit.svg';
import {ReactComponent as EditIcon} from 'assets/icons/ci_edit.svg';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from '../../../redux/userData/userDataOperation';

const LiItem = ({ label, name, user }) => {
  const [value, setValue] = useState(user);
  const [active, setActive] = useState(false);
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

  const onClickHandler = () => {
    setActive(!active);
    if(active){
      dispatch(updateUserInfo(value))
    }

  };

  return (
    <Item>
      <Label htmlFor={name}>{label}</Label>
      <Input active={active} disabled={!active} type='text' name={name} value={value} onChange={onChangeHandler} />
      <Button onClick={onClickHandler}>
        { active
          ?
          <EditIcon/>
          :
          <PenIcon/>
        }
      </Button>
    </Item>
  );
};

export default LiItem;
