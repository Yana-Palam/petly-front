import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate, useParams } from 'react-router-dom';

import { useFormik } from 'formik';
import DatePicker from 'react-date-picker';
import { showAlertMessage } from '../../../utils/showMessages';

import Loader from '../../Loader';

import s from './ModalAddNotice.module.css';
import iconClose from '../../../assets/icons/icon-close.svg';
import celendar from '../../../assets/icons/calendar.svg';
import loadMobile from '../../../assets/images/Modal/loadMobile.png';
import { ReactComponent as Male } from 'assets/icons/male.svg';
// import { ReactComponent as Male } from 'assets/icons/male.svg';
import {
  MaddNotBackdrop,
  MaddNotModal,
  MaddNotBtnClose,
  ImgClose,
  MaddNotLoader,
  MaddNotTitle,
  MaddNotDescr,
  MaddNotRadioToolbar,
  MaddNotLabelToolbar,
  MaddNotInputToolbar,
  MaddNotLabel,
  MaddNotinput,
  MaddNotTextarea,
  MaddNotAccentBtn,
  MaddNotButton,
  MaddNotBlock,
  MaddNotLabelDistance,
  MaddNotRadioToolbar2,
  MaddNotBlockOfRadio,
  MaddNotLabelMale,
  MaddNotLabelFemale,
  MaddNotInputRadio,
  MaddNotSexDescr,
  MaddNotLabelLoad,
  MaddNotThumbLoadImg,
  MaddNotLoadImage,
  MaddNotInputLoad,
} from './ModalAddNotice.styled';

const portalModal = document.querySelector('#modal-root');

const ModalAddNotice = ({ setShowModal, setArray }) => {
  // const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [photo, setPhoto] = useState('');
  const { categoryName } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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

  const formik = useFormik({
    initialValues: {
      category: 'sell',
      title: '',
      name: '',
      birthdate: '',
      breed: '',
      sex: 'male',
      location: '',
      price: '',
      comments: '',
      notices: '',
    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const {
    category,
    title,
    name,
    birthdate,
    breed,
    sex,
    location,
    price,
    comments,
    notices,
  } = formik.values;

  const {
    title: titleError,
    name: nameError,
    breed: breedError,
    location: locationError,
    price: priceError,
    comments: commentsError,
  } = formik.errors;

  useEffect(() => {
    if (!notices) {
      return;
    }

    /* Создаем виртуальную ссылку на загруженный файл */
    const objectUrl = URL.createObjectURL(notices);
    setPhoto(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [notices]);

  const onFormSubmit = async e => {
    e.preventDefault();

    if (location === '' || (category === 'sell' && price === '')) {
      showAlertMessage('errors.allFields');
      return;
    }
    if (locationError || commentsError || (category === 'sell' && priceError)) {
      showAlertMessage('errors.allFieldsFormat');
      return;
    }
    setIsLoading(true);

    try {
      // await addNotice(info);
      if (categoryName !== 'own') {
        setShowModal(false);
        navigate('/notices/own');
        return;
      }
      // const response = await fetchOwnAds();
      setShowModal(false);
      // setArray(response);
    } catch (error) {
      showAlertMessage(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const onPageChange = () => {
    if (page === 1) {
      if (title === '') {
        showAlertMessage('errors.allFields');
        return;
      }

      if (titleError || nameError || breedError) {
        showAlertMessage('errors.allFieldsFormat');
        return;
      }
      setPage(2);
      return;
    }
    setPage(1);
  };

  return createPortal(
    <MaddNotBackdrop className={s.backdrop} onClick={onBackdropClick}>
      <MaddNotModal className={s.modal}>
        <MaddNotBtnClose
          type="button"
          className={s.btnClose}
          onClick={onBtnCloseClick}
        >
          <ImgClose src={iconClose} alt="" />
        </MaddNotBtnClose>
        <MaddNotTitle className={s.title}>Title</MaddNotTitle>
        {page === 1 && <MaddNotDescr className={s.descr}>Descr</MaddNotDescr>}
        <form onSubmit={onFormSubmit}>
          {page === 1 && (
            <>
              <MaddNotRadioToolbar className={s.radioToolbar}>
                <MaddNotLabelToolbar
                  className={
                    category === 'lostFound'
                      ? s.activeCategory
                      : s.notActiveCategory
                  }
                >
                  Lost/found
                  <MaddNotInputToolbar
                    type="radio"
                    id="radio1"
                    name="category"
                    value="lostFound"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </MaddNotLabelToolbar>
                <MaddNotLabelToolbar
                  className={
                    category === 'inGoodHands'
                      ? s.activeCategory
                      : s.notActiveCategory
                  }
                >
                  inGoodHands
                  <MaddNotInputToolbar
                    type="radio"
                    id="radio2"
                    name="category"
                    value="inGoodHands"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </MaddNotLabelToolbar>
                <MaddNotLabelToolbar
                  className={
                    category === 'sell' ? s.activeCategory : s.notActiveCategory
                  }
                >
                  Sell
                  <MaddNotInputToolbar
                    type="radio"
                    id="radio3"
                    name="category"
                    value="sell"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </MaddNotLabelToolbar>
              </MaddNotRadioToolbar>
              <MaddNotLabel forhtml="title" className={s.label}>
                TitleAd
              </MaddNotLabel>
              <MaddNotinput
                className={s.input}
                type="text"
                name="title"
                id="title"
                placeholder={'titleAd'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={title}
              />
              <MaddNotLabel forhtml="name" className={s.label}>
                Name
              </MaddNotLabel>
              <MaddNotinput
                className={s.input}
                type="text"
                name="name"
                id="name"
                placeholder={'name'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={name}
              />
              <MaddNotLabel forhtml="birthdate" className={s.label}>
                Date
              </MaddNotLabel>

              <DatePicker
                clearIcon={null}
                calendarIcon={<ImgClose src={celendar} alt="" />}
                format="dd.MM.yyyy"
                // className={<MaddNotinput />}
                dateFormat="dd.MM.yyyy"
                selected={birthdate}
                maxDate={new Date()}
                yearPlaceholder={'years'}
                monthPlaceholder={'months'}
                dayPlaceholder={'days'}
                id="birthdate"
                name="birthdate"
                value={birthdate}
                onChange={value => {
                  if (!value) {
                    return;
                  }
                  formik.setFieldValue(
                    'birthdate',
                    new Date(Date.parse(value)),
                  );
                }}
              />

              <MaddNotLabel forhtml="breed" className={s.label}>
                Breed
              </MaddNotLabel>
              <MaddNotinput
                className={s.input}
                type="text"
                name="breed"
                id="breed"
                placeholder={'breed'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={breed}
              />
              <MaddNotBlock className={s.blockOfButtons}>
                <MaddNotButton
                  className={s.button}
                  type="button"
                  onClick={onBtnCloseClick}
                >
                  Cancel
                </MaddNotButton>
                <MaddNotAccentBtn
                  className={`${s.button} ${s.accentBtn}`}
                  type="button"
                  onClick={onPageChange}
                >
                  Next
                </MaddNotAccentBtn>
              </MaddNotBlock>
            </>
          )}
          {page === 2 && (
            <>
              <MaddNotRadioToolbar2 className={s.radioToolbarPage2}>
                <MaddNotLabelDistance
                  className={`${s.label} ${s.labelDistance}`}
                >
                  Title
                </MaddNotLabelDistance>
                <MaddNotBlockOfRadio className={s.blockOfRadio}>
                  <MaddNotLabelMale
                    className={`${s.sexLabel} ${s.labelMale}`}
                    // backgroundImage="url('../../../assets/images/male.png')"
                  >
                    <Male />
                    <MaddNotInputRadio
                      type="radio"
                      name="sex"
                      value="male"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <MaddNotSexDescr
                      className={`${s.sexDescr} ${
                        sex === 'male' ? s.active : s.notActive
                      }`}
                    >
                      Male
                    </MaddNotSexDescr>
                  </MaddNotLabelMale>
                  <MaddNotLabelFemale
                    className={`${s.sexLabel} ${s.labelFemale}`}
                  >
                    <MaddNotInputRadio
                      type="radio"
                      name="sex"
                      value="female"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <MaddNotSexDescr
                      className={`${s.sexDescr} ${
                        sex === 'female' ? s.active : s.notActive
                      }`}
                    >
                      Female
                    </MaddNotSexDescr>
                  </MaddNotLabelFemale>
                </MaddNotBlockOfRadio>
              </MaddNotRadioToolbar2>
              <MaddNotLabel forhtml="location" className={s.label}>
                Location:
              </MaddNotLabel>
              <MaddNotinput
                className={s.input}
                type="text"
                name="location"
                id="location"
                placeholder={'location'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={location}
              />

              <div className={s.loadImgGroup}>
                <p className={s.titleLoad}>Load</p>
                <MaddNotLabelLoad forhtml="file" className={s.labelLoad}>
                  {!photo && <ImgClose src={loadMobile} alt="add_photo" />}
                  {photo && (
                    <MaddNotThumbLoadImg className={s.thumbLoadImg}>
                      <MaddNotLoadImage
                        src={photo}
                        alt="pet_photo"
                        className={s.loadImage}
                      />
                    </MaddNotThumbLoadImg>
                  )}
                  <MaddNotInputLoad
                    id="file"
                    name="notices"
                    type="file"
                    onChange={event => {
                      formik.setFieldValue(
                        'notices',
                        event.currentTarget.files[0],
                      );
                    }}
                    className={s.inputLoad}
                  />
                </MaddNotLabelLoad>
              </div>
              {category === 'sell' && (
                <>
                  <MaddNotLabel forhtml="price" className={s.label}>
                    Price
                  </MaddNotLabel>
                  <MaddNotinput
                    className={s.input}
                    type="text"
                    name="price"
                    id="price"
                    placeholder={'price'}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={price}
                  />
                </>
              )}
              <MaddNotLabel forhtml="comments" className={s.label}>
                Comments
              </MaddNotLabel>
              <MaddNotTextarea
                className={s.textarea}
                name="comments"
                id="comments"
                placeholder={'comments'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={comments}
              ></MaddNotTextarea>

              <MaddNotBlock className={s.blockOfButtons}>
                <MaddNotButton
                  className={`${s.button} ${s.buttonDistance}`}
                  type="button"
                  onClick={onPageChange}
                >
                  back
                </MaddNotButton>
                <MaddNotAccentBtn
                  className={
                    isLoading ? s.disabled : `${s.button} ${s.accentBtn}`
                  }
                  type="submit"
                  disabled={isLoading ? true : false}
                >
                  done
                </MaddNotAccentBtn>
              </MaddNotBlock>
            </>
          )}
        </form>
      </MaddNotModal>
      {isLoading && (
        <MaddNotLoader className={s.loader}>
          <Loader />
        </MaddNotLoader>
      )}
    </MaddNotBackdrop>,
    portalModal,
  );
};

export default ModalAddNotice;
