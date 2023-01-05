import React from 'react';
import { useFormik } from 'formik';
import iconClose from '../../../assets/icons/icon-close.svg';
import s from './ModalAddsPet.module.css';
import {
  Modal,
  BtnClose,
  Label,
  Input,
  ImgClose,
} from './ModalAddsPet.styled';

const ModalAddPet = ({closeModal}) => {

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const {  name } = formik.values;

  return (
    <Modal>
      <BtnClose
        type="button"
        onClick={closeModal}
      >
        <ImgClose src={iconClose} alt="" />
      </BtnClose>
      <form>
            <h2 className={s.title}>Title</h2>
            <Label forhtml="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder={'Name'}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={name}
            />
      </form>
    </Modal>
  );
}

export default ModalAddPet;
