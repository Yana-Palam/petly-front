import React, { useRef, useState } from 'react';
import { Button, Input, Label, Item, SpanValidation } from './UserDataItem.styled';
import { ReactComponent as PenIcon } from 'assets/icons/pen_edit.svg';
import { ReactComponent as EditIcon } from 'assets/icons/ci_edit.svg';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from '../../../redux/auth/authOperations';
import useOutsideClick from '../../../hooks/useOutsideHook/useOutsideHook';

const emailRegExp = /^[a-zA-Z0-9]+[a-zA-Z0-9_-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$/;
const cityRegex = /^(\w+(,)\s*)+\w+$/;
const phoneRegex = /^\+380\d{9}$/;

const LiItem = ({ label, name, user, active, setActive, children }) => {
  const [value, setValue] = useState('');
  const wrapperRef = useRef(null);
  const dispatch = useDispatch();
  const outsideClickHandler = () => {
    setValue(user);
    setActive('');
  };

  useOutsideClick(wrapperRef, outsideClickHandler);

  const [error, setError] = useState('');

  const onChangeHandler = e => {
    const { name, value } = e.currentTarget;

    if (name === 'name') {
      setValue(value);
    }

    if (name === 'email') {
      if (!value.match(emailRegExp)) {
        setError('Email is not valid');
      } else if (error) {
        setError('');
      }
      setValue(value);
    }

    if (name === 'birthday') {
      setValue(value);
    }

    if (name === 'phone') {
      if (!value.match(phoneRegex)) {
        setError('Phone number is not valid');
      } else if (error) {
        setError('');
      }
      setValue(value);
    }
    if (name === 'city') {
      if (!value.match(cityRegex)) {
        setError('Error. Example: Brovary, Kyiv');
      } else if (error) {
        setError('');
      }
      setValue(value);
    }
  };

  const onEditHandler = name => () => {
    dispatch(updateUserInfo({ [name]: value || user }));
    setActive('');
  };

  const onSetActiveHandler = name => () => setActive(name);


  return (
    <>
      <Item ref={active === name ? wrapperRef : null}>
        <Label htmlFor={name}>{label}</Label>
        {/*{*/}
        {/*  !children*/}
        {/*    ?*/}
            <Input
              active={active === name}
              disabled={active !== name}
              // type={name === "birthday" ? "date" : "text"}
              //DD.MM.YYYY
              name={name}
              value={value || user}
              onChange={onChangeHandler}
            />
         {/*  :*/}
         {/*   children*/}
         {/*}*/}

        <Button>
          {active === name ? (
            <EditIcon onClick={onEditHandler(name)} />
          ) : (
            <PenIcon
              onClick={onSetActiveHandler(name)}
              fill={
                active && active !== name ? 'rgba(17, 17, 17, 0.6)' : '#F59256'
              }
            />
          )}
        </Button>
      </Item>
      {error && (active === name) ? <SpanValidation>{error}</SpanValidation> : null}
    </>
  );
};

export default LiItem;
