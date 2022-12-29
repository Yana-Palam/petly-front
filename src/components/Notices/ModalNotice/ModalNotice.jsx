import { useEffect } from 'react';
import { createPortal } from 'react-dom';
// import { showAlertMessage } from '../../../utils/showMessages';
import iconClose from '../../../assets/icons/icon-close.svg';
import {
  NotBackdrop,
  NotModal,
  NotBtnClose,
  NotImgClose,
  NotDescrBox,
  NotThumbImage,
  NotPhoto,
  NotCategory,
  NotTitle,
  NotTable,
  NotDescr,
  NotComments,
  NotCommentsDescr,
  NotBlockOfBtn,
  NotBtn,
  NotBtnAccent,
  NotIconTitle,
  NotImgIcon,
  NotDescrTitleAccent,
  NotDescrTitleAccentFirst,
  NotDescrTitleAccentLast,
} from './ModalNotice.styled';
import favorite from '../../../assets/icons/favorite.svg';

import s from './ModalNotice.module.css';

const portalModal = document.querySelector('#modal-root');

const ModalNotice = ({
  id,
  categories,
  setShowModal,
  isFavorite,
  onClickFavorite,
  onDeleteAdClick,
}) => {
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
    if (e.currentTarget === e.target) setShowModal(true);
  };

  const onBtnCloseClick = () => {
    setShowModal(true);
  };

  // const convertBirthday = birthday => {
  //   return moment(birthday).format('DD.MM.YYYY');
  // };

  return createPortal(
    <NotBackdrop className={s.backdrop} onClick={onBackdropClick}>
      <NotModal className={s.modal}>
        <NotBtnClose
          type="button"
          className={s.btnClose}
          onClick={onBtnCloseClick}
        >
          <NotImgClose src={iconClose} alt="" />
        </NotBtnClose>
        <NotDescrBox className={s.descrBox}>
          <NotThumbImage className={s.thumbImage}>
            <NotPhoto
              // src={imgURL}
              className={s.photo}
              alt="animal"
            />

            <NotCategory className={s.category}>
              {/* {categories[info.category]} */}
              categories
            </NotCategory>
          </NotThumbImage>
          <div className={s.thumbDescr}>
            <NotTitle className={s.title}>
              {/* {title} */}
              title
            </NotTitle>
            <NotTable className={s.table}>
              <tbody>
                <tr>
                  <NotDescrTitleAccentFirst
                    className={`${s.descrTitle}  ${s.descrAccent} ${s.descrFirst}`}
                  >
                    <p>name:</p>
                  </NotDescrTitleAccentFirst>
                  <NotDescr className={s.descr}>
                    <p>name</p>
                  </NotDescr>
                </tr>
                <tr>
                  <NotDescrTitleAccent
                    className={`${s.descrTitle} ${s.descrAccent}`}
                  >
                    <p>birthday:</p>
                  </NotDescrTitleAccent>
                  <NotDescr className={s.descr}>
                    <p>birthdate</p>
                  </NotDescr>
                </tr>
                <tr>
                  <NotDescrTitleAccent
                    className={`${s.descrTitle} ${s.descrAccent}`}
                  >
                    <p>breed:</p>
                  </NotDescrTitleAccent>
                  <NotDescr className={s.descr}>
                    <p>breed </p>
                  </NotDescr>
                </tr>
                <tr>
                  <NotDescrTitleAccent
                    className={`${s.descrTitle} ${s.descrAccent}`}
                  >
                    <p>place:</p>
                  </NotDescrTitleAccent>
                  <NotDescr className={s.descr}>
                    <p>location</p>
                  </NotDescr>
                </tr>
                <tr>
                  <NotDescrTitleAccent
                    className={`${s.descrTitle} ${s.descrAccent}`}
                  >
                    <p>sex:</p>
                  </NotDescrTitleAccent>
                  <NotDescr className={s.descr}>
                    <p>
                      {/* {{sex === 'male'
                          ? 'noticesPage.addNotice.sex.male'
                          : 'noticesPage.addNotice.sex.female'} } */}
                    </p>
                  </NotDescr>
                </tr>
                <tr>
                  <NotDescrTitleAccent
                    className={`${s.descrTitle} ${s.descrAccent}`}
                  >
                    <p>email:</p>
                  </NotDescrTitleAccent>
                  <NotDescr className={s.descr}>
                    <p>email</p>
                  </NotDescr>
                </tr>
                <tr>
                  <NotDescrTitleAccent
                    className={`${s.descrTitle} ${s.descrAccent}`}
                  >
                    <p>phone:</p>
                  </NotDescrTitleAccent>
                  <NotDescr className={s.descr}>
                    <p>phone</p>
                  </NotDescr>
                </tr>

                <tr>
                  <NotDescrTitleAccentLast
                    className={`${s.descrTitle} ${s.descrAccent} ${s.descrLast}`}
                  >
                    <p>sell:</p>
                  </NotDescrTitleAccentLast>
                  <NotDescr className={s.descr}>
                    <p>price UAH</p>
                  </NotDescr>
                </tr>
              </tbody>
            </NotTable>
          </div>
        </NotDescrBox>

        <NotCommentsDescr className={s.commentsDescr}>
          Comments:
          <NotComments className={s.comments}>
            {/* {comments} */}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum,
            placeat non! Maxime esse aliquam repellat cupiditate, quisquam id
            enim ratione, repellendus nemo incidunt numquam neque ex asperiores
            porro eaque suscipit?
          </NotComments>
        </NotCommentsDescr>

        <NotBlockOfBtn className={s.blockOfBtn}>
          {/* {userEmail === owner?.email && ( */}
          <NotBtn className={s.btn} type="button" onClick={onDeleteAdClick}>
            {/* {'noticesPage.buttons.delete'} */}
            Delete
          </NotBtn>
          {/* )} */}
          {/* <button
            className={`${s.btn} ${s.btnToggleFavorite}`}
            type="button"
            onClick={onClickFavorite}
          > */}
          <NotIconTitle className={s.iconTitle}>
            {/* {isFavorite
                ? 'noticesPage.buttons.removeFavorite'
                : 'noticesPage.buttons.addFavorite'} */}
            addFavorite
            <NotImgIcon src={favorite} alt="" />
          </NotIconTitle>
          {/* </button> */}
          <NotBtnAccent className={`${s.btn} ${s.accent}`} href={`tel: `}>
            {/* {'noticesPage.buttons.contact'} */}
            Contact
          </NotBtnAccent>
        </NotBlockOfBtn>
      </NotModal>
    </NotBackdrop>,
    portalModal,
  );
};

export default ModalNotice;
