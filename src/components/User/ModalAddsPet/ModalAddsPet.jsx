import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import DatePicker from 'react-date-picker';
import { showAlertMessage } from '../../../utils/showMessages';
import { addPet } from '../../../redux/userData/userDataOperation';
import imgLoad from '../../../assets/images/Modal/loadMobile.png';
import iconClose from '../../../assets/icons/icon-close.svg';
import celendar from '../../../assets/icons/calendar.svg';
import s from './ModalAddsPet.module.css';
import {
  Backdrop,
  Modal,
  BtnClose,
  Label,
  Input,
  LabelLoad,
  Textarea,
  ImgClose,
  BlockOfButtons,
  Button,
  AccentBtn,
  ThumbLoadImg,
} from './ModalAddsPet.styled';

const modalContainer = document.getElementById('modal-root');

const ModalAddsPet = ({ setShowModal }) => {
  const [page, setPage] = useState(1);
  const [photo, setPhoto] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') setShowModal(false);
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line
  }, []);

  const onBackdropClick = e => {
    if (e.currentTarget === e.target) setShowModal(false);
  };

  const onBtnCloseClick = () => {
    setShowModal(false);
  };

  const onPageChange = () => {
    if (page === 1) {
      if (name === '' || breed === '') {
        showAlertMessage('errors.allFields');
        return;
      }

      if (nameError || breedError) {
        showAlertMessage('errors.allFieldsFormat');
        return;
      }

      setPage(2);
      return;
    }
    setPage(1);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      birthday: new Date(),
      breed: '',
      comments: '',
      pet: '',
    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { pet, name, birthday, breed, comments } = formik.values;

  const {
    name: nameError,
    breed: breedError,
    comments: commentsError,
  } = formik.errors;

  useEffect(() => {
    if (!pet) {
      return;
    }

    /* Создаем виртуальную ссылку на загруженный файл */
    const objectUrl = URL.createObjectURL(pet);
    setPhoto(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [pet]);

  const onFormSubmit = async e => {
    e.preventDefault();

    if (commentsError) {
      showAlertMessage('errors.notRightComments');
      return;
    }

    const arrayOfData = Object.entries({
      name,
      birthday,
      breed,
      comments,
      pet,
    });

    const filteredArray = arrayOfData.filter(item => item[1]);
    const info = filteredArray.reduce((previousValue, feature) => {
      return { ...previousValue, [feature[0]]: feature[1] };
    }, {});

    dispatch(addPet(info));
    setShowModal(false);
  };

  return createPortal(
    <Backdrop onClick={onBackdropClick}>
      <Modal>
        <BtnClose
          type="button"
          className={s.btnClose}
          onClick={onBtnCloseClick}
        >
          <ImgClose src={iconClose} alt="" />
        </BtnClose>
        <form onSubmit={onFormSubmit}>
          {page === 1 && (
            <>
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
              <p className={s.error}>
                {formik.touched.name && nameError && nameError}
              </p>
              <Label forhtml="birthday">Date</Label>
              <DatePicker
                clearIcon={null}
                calendarIcon={<ImgClose src={celendar} alt="" />}
                format="dd.MM.yyyy"
                selected={birthday}
                maxDate={new Date()}
                yearPlaceholder={'years'}
                monthPlaceholder={'months'}
                dayPlaceholder={'days'}
                id="birthday"
                name="birthday"
                value={birthday}
                onChange={value => {
                  if (!value) {
                    return;
                  }
                  formik.setFieldValue('birthday', new Date(Date.parse(value)));
                }}
              />
              <p className={s.error}></p>
              <Label forhtml="breed">Breed</Label>
              <Input
                type="text"
                name="breed"
                id="breed"
                placeholder={'Breed'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={breed}
              />
              <p className={s['error--last']}>
                {formik.touched.breed && breedError && breedError}
              </p>
              <BlockOfButtons>
                <Button type="button" onClick={onBtnCloseClick}>
                  Cancel
                </Button>
                <AccentBtn type="button" onClick={onPageChange}>
                  Next
                </AccentBtn>
              </BlockOfButtons>
            </>
          )}
          {page === 2 && (
            <>
              <h2 className={s.titleSecondPage}>Title</h2>
              <p className={s.descr}>Description</p>
              <div className={s.loadImgGroup}>
                <LabelLoad forhtml="file">
                  {!photo && (
                    <img src={imgLoad} alt="add_photo" width="71" height="71" />
                  )}
                  {photo && (
                    <ThumbLoadImg>
                      <img
                        src={photo}
                        alt="pet_photo"
                        className={s.loadImage}
                      />
                    </ThumbLoadImg>
                  )}
                  <input
                    id="file"
                    name="pet"
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    onChange={event => {
                      formik.setFieldValue('pet', event.currentTarget.files[0]);
                    }}
                    className={s.inputLoad}
                  />
                </LabelLoad>
              </div>
              <Label forhtml="comments">Comments</Label>
              <Textarea
                name="comments"
                id="comments"
                placeholder={'Comments'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={comments}
              ></Textarea>
              <p className={s['error--last']}>
                {formik.touched.comments && commentsError && commentsError}
              </p>
              <BlockOfButtons>
                <Button type="button" onClick={onPageChange}>
                  Back
                </Button>
                <AccentBtn type="submit">Done</AccentBtn>
              </BlockOfButtons>
            </>
          )}
        </form>
      </Modal>
    </Backdrop>,
    modalContainer,
  );
};

export default ModalAddsPet;
