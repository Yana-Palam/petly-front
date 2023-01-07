import { useEffect, useState } from 'react';
// import { createPortal } from 'react-dom';
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import {
  // addFavoriteNotice,
  addOwnNotice,
} from '../../../redux/auth/authOperations';
import DatePicker from 'react-date-picker';
import { showAlertMessage } from '../../../utils/showMessages';

import Loader from '../../Loader';

import iconClose from '../../../assets/icons/icon-close.svg';
import celendar from '../../../assets/icons/calendar.svg';
import loadMobile from '../../../assets/images/Modal/loadMobile.png';

import {
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
  Title,
  IconMale,
  IconFemale,
  Item,
} from './ModalAddNotice.styled';

// const portalModal = document.querySelector('#modal-root');

const ModalAddNotice = ({ setArray, closeModal }) => {
  const [page, setPage] = useState(1);
  const [photo, setPhoto] = useState('');
  // const [startDate, setStartDate] = useState(new Date());
  // const { categoryName } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  // const navigate = useNavigate();
  const [select, setSelect] = useState('optionA');
  const dispatch = useDispatch();

  const handleSelectChange = event => {
    const value = event.target.value;
    setSelect(value);
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
    validationSchema: Yup.object({
      category: Yup.string().required('validation.required'),
      title: Yup.string()
        .min(2, 'validation.min')
        .max(48, 'validation.titleMax')
        .required('validation.required'),
      name: Yup.string()
        .min(2, 'validation.min')
        .max(16, 'validation.namePetMax'),
      birthdate: Yup.string()
        .nullable()
        .test('birthdate', function (value) {
          return moment().diff(moment(value, 'DD-MM-YYYY'));
        })
        .required('validation.required'),
      breed: Yup.string().min(2, 'validation.min').max(24, 'validation.max'),
      sex: Yup.string().required('validation.required'),
      location: Yup.string()
        .min(2, 'validation.min')
        .max(24, 'validation.max')
        .required('validation.required'),
      price: Yup.number()
        .typeError('validation.priceNum')
        .integer('validation.priceInt')
        .required('validation.required'),
      comments: Yup.string()
        .min(8, 'validation.commentsMin')
        .max(120, 'validation.commentsMax'),
    }),
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

  // console.log(formik.values);

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

    const transformedPrice = category === 'sell' ? Number(price) : '';

    const arrayOfData = Object.entries({
      category,
      title,
      name,
      birthdate,
      breed,
      sex,
      location,
      price: transformedPrice,
      comments,
      notices,
    });
    const filteredArray = arrayOfData.filter(item => item[1]);
    const info = filteredArray.reduce((previousValue, feature) => {
      return { ...previousValue, [feature[0]]: feature[1] };
    }, {});
    dispatch(addOwnNotice(info));
    // setShowModal(false);
    // // setShowModal(false);
    // setArray(response);
    setIsLoading(false);
    // try {
    //   await addFavoriteNotice(info);
    //   if (categoryName !== 'own') {
    //     // setShowModal(false);
    //     // dispatch(addFavoriteNotice(info));
    //     navigate('/notices/own');
    //     return;
    //   }
    //   const response = await addOwnNotice();
    //   // setShowModal(false);
    //   setArray(response);
    // } catch (error) {
    //   showAlertMessage(error.message);
    // } finally {
    //   setIsLoading(false);
    // }
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

  return (
    <>
      <MaddNotModal>
        <MaddNotBtnClose type="button" onClick={closeModal}>
          <ImgClose src={iconClose} alt="" />
        </MaddNotBtnClose>
        <MaddNotTitle>Add pet</MaddNotTitle>
        {page === 1 && <MaddNotDescr>Descr</MaddNotDescr>}
        <form onSubmit={onFormSubmit}>
          {page === 1 && (
            <>
              <MaddNotRadioToolbar>
                <Item>
                  <MaddNotInputToolbar
                    type="radio"
                    id="radio1"
                    name="category"
                    value="lostFound"
                    // onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={select === 'optionA'}
                    onChange={event => handleSelectChange(event)}
                  />
                  <MaddNotLabelToolbar>lost/found</MaddNotLabelToolbar>
                </Item>
                <Item>
                  <MaddNotInputToolbar
                    type="radio"
                    id="radio2"
                    name="category"
                    value="inGoodHands"
                    // onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={select === 'optionA'}
                    onChange={event => handleSelectChange(event)}
                  />
                  <MaddNotLabelToolbar>in good hands</MaddNotLabelToolbar>
                </Item>
                <Item>
                  <MaddNotInputToolbar
                    type="radio"
                    id="radio3"
                    name="category"
                    value="sell"
                    // onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={select === 'optionA'}
                    onChange={event => handleSelectChange(event)}
                  />
                  <MaddNotLabelToolbar>sell</MaddNotLabelToolbar>
                </Item>
              </MaddNotRadioToolbar>
              <MaddNotLabel forhtml="title">Tittle of ad*</MaddNotLabel>
              <MaddNotinput
                type="text"
                name="title"
                id="title"
                placeholder={'titleAd'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={title}
              />
              <MaddNotLabel forhtml="name">Name pet</MaddNotLabel>
              <MaddNotinput
                type="text"
                name="name"
                id="name"
                placeholder={'name'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={name}
              />
              <MaddNotLabel forhtml="birthdate">Date</MaddNotLabel>
              <MaddNotinput as={'div'}>
                <DatePicker
                  clearIcon={null}
                  calendarIcon={<ImgClose src={celendar} alt="" />}
                  format="dd.MM.yyyy"
                  dateFormat="dd.MM.yyyy"
                  yearPlaceholder={'years'}
                  monthPlaceholder={'months'}
                  dayPlaceholder={'days'}
                  disableFuture
                  id="birthdate"
                  name={birthdate}
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
              </MaddNotinput>
              <MaddNotLabel forhtml="breed">Breed</MaddNotLabel>
              <MaddNotinput
                type="text"
                name="breed"
                id="breed"
                placeholder={'breed'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={breed}
              />
              <MaddNotBlock>
                <MaddNotButton type="button" onClick={closeModal}>
                  Cancel
                </MaddNotButton>
                <MaddNotAccentBtn type="button" onClick={onPageChange}>
                  Next
                </MaddNotAccentBtn>
              </MaddNotBlock>
            </>
          )}
          {page === 2 && (
            <>
              <MaddNotRadioToolbar2>
                <MaddNotLabelDistance>The sex*:</MaddNotLabelDistance>
                <MaddNotBlockOfRadio>
                  <MaddNotLabelMale>
                    <IconMale />
                    <MaddNotInputRadio
                      type="radio"
                      name="sex"
                      value="male"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <MaddNotSexDescr>Male</MaddNotSexDescr>
                  </MaddNotLabelMale>
                  <MaddNotLabelFemale>
                    <IconFemale />
                    <MaddNotInputRadio
                      type="radio"
                      name="sex"
                      value="female"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />

                    <MaddNotSexDescr>Female</MaddNotSexDescr>
                  </MaddNotLabelFemale>
                </MaddNotBlockOfRadio>
              </MaddNotRadioToolbar2>
              <MaddNotLabel forhtml="location">Location:</MaddNotLabel>
              <MaddNotinput
                type="text"
                name="location"
                id="location"
                placeholder={'location'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={location}
              />

              <div>
                <Title>Load the pet’s image:</Title>
                <MaddNotLabelLoad forhtml="file">
                  {!photo && <ImgClose src={loadMobile} alt="add_photo" />}
                  {photo && (
                    <MaddNotThumbLoadImg>
                      <MaddNotLoadImage src={photo} alt="pet_photo" />
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
                  />
                </MaddNotLabelLoad>
              </div>
              {category === 'sell' && (
                <>
                  <MaddNotLabel forhtml="price">Price</MaddNotLabel>
                  <MaddNotinput
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
              <MaddNotLabel forhtml="comments">Comments</MaddNotLabel>
              <MaddNotTextarea
                name="comments"
                id="comments"
                placeholder={'comments'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={comments}
              ></MaddNotTextarea>

              <MaddNotBlock>
                <MaddNotButton type="button" onClick={onPageChange}>
                  Back
                </MaddNotButton>
                <MaddNotAccentBtn
                  type="submit"
                  disabled={isLoading ? true : false}
                >
                  Done
                </MaddNotAccentBtn>
              </MaddNotBlock>
            </>
          )}
        </form>
      </MaddNotModal>
      {isLoading && (
        <MaddNotLoader>
          <Loader />
        </MaddNotLoader>
      )}
    </>
  );
};

export default ModalAddNotice;
