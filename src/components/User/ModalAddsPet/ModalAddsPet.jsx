import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
// import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import DatePicker from 'react-date-picker';
import { showAlertMessage } from '../../../utils/showMessages';
// import { addPetInUserCard } from '../../../redux/userData/userDataOperation';
import imgLoad from '../../../assets/images/Modal/loadMobile.png';
import iconClose from '../../../assets/icons/icon-close.svg';
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
  // const dispatch = useDispatch();

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

    // const arrayOfData = Object.entries({
    //   name,
    //   birthday,
    //   breed,
    //   comments,
    //   pet,
    // });

    // const filteredArray = arrayOfData.filter(item => item[1]);
    // const info = filteredArray.reduce((previousValue, feature) => {
    //   return { ...previousValue, [feature[0]]: feature[1] };
    // }, {});

    // dispatch(addPetInUserCard(info));
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
          {/* <svg
            className={s.iconClose}
            aria-label="Close modal"
            width="21"
            height="21"
          >
            <use href={'icon-close'} />
          </svg> */}
        </BtnClose>
        <form onSubmit={onFormSubmit}>
          {page === 1 && (
            <>
              <h2 className={s.title}>
                {/* {'userPage.addPet.title'} */}
                Title
              </h2>
              <Label forhtml="name" className={s.label}>
                {/* {'userPage.addPet.name'} */}
                Name
                <span className={s.accent}>*</span>
              </Label>
              <Input
                className={s.input}
                type="text"
                name="name"
                id="name"
                // placeholder={'userPage.addPet.placeholders.name'}
                placeholder={'Name'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={name}
              />
              <p className={s.error}>
                {formik.touched.name && nameError && nameError}
              </p>
              <Label forhtml="birthday" className={s.label}>
                {/* {'userPage.addPet.date'} */}
                Date
                <span className={s.accent}>*</span>
              </Label>
              <DatePicker
                clearIcon={null}
                calendarIcon={
                  <svg width={20} height={20}>
                    {/* <use href={sprite + '#icon-calendar'} /> */}
                  </svg>
                }
                format="dd.MM.yyyy"
                className={s.input}
                selected={birthday}
                maxDate={new Date()}
                yearPlaceholder={'userPage.addPet.placeholders.years'}
                monthPlaceholder={'userPage.addPet.placeholders.months'}
                dayPlaceholder={'userPage.addPet.placeholders.days'}
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
              <Label forhtml="breed" className={s.label}>
                {/* {'userPage.addPet.breed'} */}
                Breed
                <span className={s.accent}>*</span>
              </Label>
              <Input
                className={s.input}
                type="text"
                name="breed"
                id="breed"
                // placeholder={'userPage.addPet.placeholders.breed'}
                placeholder={'Breed'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={breed}
              />
              <p className={s['error--last']}>
                {formik.touched.breed && breedError && breedError}
              </p>
              <BlockOfButtons className={s.blockOfButtons}>
                <Button
                  className={s.button}
                  type="button"
                  onClick={onBtnCloseClick}
                >
                  {/* {'noticesPage.buttons.cancel'} */}
                  Cancel
                </Button>
                <AccentBtn
                  className={`${s.button} ${s.accentBtn}`}
                  type="button"
                  onClick={onPageChange}
                >
                  {/* {'noticesPage.buttons.next'} */}
                  Next
                </AccentBtn>
              </BlockOfButtons>
            </>
          )}
          {page === 2 && (
            <>
              <h2 className={s.titleSecondPage}>
                {/* {'userPage.addPet.title'} */}
                Title
              </h2>
              <p className={s.descr}>
                {/* {'userPage.addPet.description'} */}
                Description
              </p>
              <div className={s.loadImgGroup}>
                <LabelLoad forhtml="file" className={s.labelLoad}>
                  {!photo && (
                    <img src={imgLoad} alt="add_photo" width="71" height="71" />
                  )}
                  {photo && (
                    <ThumbLoadImg className={s.thumbLoadImg}>
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
              <Label forhtml="comments" className={s.label}>
                {/* {'userPage.addPet.comments'} */}
                Comments
              </Label>
              <Textarea
                className={s.textarea}
                name="comments"
                id="comments"
                placeholder={'Comments'}
                // placeholder={'userPage.addPet.placeholders.comments'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={comments}
              ></Textarea>
              <p className={s['error--last']}>
                {formik.touched.comments && commentsError && commentsError}
              </p>
              <BlockOfButtons className={s.blockOfButtons}>
                <Button
                  className={s.button}
                  type="button"
                  onClick={onPageChange}
                >
                  {/* {'noticesPage.buttons.back'} */}
                  Back
                </Button>
                <AccentBtn
                  className={`${s.button} ${s.accentBtn}`}
                  type="submit"
                >
                  {/* {'noticesPage.buttons.done'} */}
                  Done
                </AccentBtn>
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
