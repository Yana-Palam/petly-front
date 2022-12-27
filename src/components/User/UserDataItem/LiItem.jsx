import React, { useState } from 'react';
import { Button, ImgDelete, Input, Label, Item } from './UserDataItem.styled';
import penIcon from '../../../assets/icons/pen_edit.svg';
import editIcon from '../../../assets/icons/ci_edit.svg';

const LiItem = ({ label, name, user }) => {
  const [value, setValue] = useState(user);
  const [active, setActive] = useState(false);

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const onClickHandler = () => {
    setActive(!active);
  };

  return (
    <Item>
      <Label htmlFor={name}>{label}</Label>
      <Input active={active} disabled={!active} type='text' name={name} value={value} onChange={onChangeHandler} />
      <Button onClick={onClickHandler}>
        <ImgDelete src={ active ? editIcon : penIcon} alt='' />
      </Button>
    </Item>
  );
};

export default LiItem;
