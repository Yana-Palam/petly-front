import { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';

import useToggleModal from 'hooks/toggleModal';

import { selectAccessToken } from 'redux/auth/authSelectors';
import { fetchByCategory } from 'redux/notice/noticeOperations';
import { selectNoticeState } from 'redux/notice/noticeSelectors';
import { changeFavorite } from 'redux/notice/noticeSlice';

// Components
import Container from 'components/Common/Container';
import Modal from 'components/Common/Modal/Modal';
import ModalNotice from 'components/Notices/ModalLearnMoreNotice/ModalNotice';
import NoticesSearch from 'components/Notices/NoticesSearch';
import NoticesCategoriesNav from 'components/Notices/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/Notices/NoticesCategoriesList';
// import NoticeNotFound from 'components/Notices/NoticeNotFound';
import Loader from 'components/Loader';
import DelNoticeItem from 'components/Notices/DelNoticeItem';

// import ModalNotice from '../../components/Notices/ModalNotice/ModalNotice';
import { Title } from './NoticesPage.styled';

const initialState = {
  search: '',
  btnType: '',
  btnId: '',
};

function NoticesPage() {
  const [state, setState] = useState(initialState);

  const dispatch = useDispatch();
  const token = useSelector(selectAccessToken);
  const { notices, isLoading } = useSelector(selectNoticeState);
  const [searchParams, setSearchParams] = useSearchParams();

  const { isOpen, openModal, closeModal, handleBackdropClick, handleKeyDown } =
    useToggleModal();

  // const [search, setSearch] = useState(
  //   '', // searchParams.get('q') === null ? '' : searchParams.get('q')
  // );

  const path = useLocation().pathname;
  let navigate = useNavigate();

  console.log('notices', notices);

  useEffect(() => {
    const q = searchParams.get('q');
    if (Boolean(q)) {
      // console.log(111111, { category, q: search });
      //TOTO dispatch /api/notices/:category?q=search
      // dispatch({ category, q: search });
      // setSearch('');
    } else {
      console.log(222222, { path, q: state.search });
      const category = path.split('/')[2];
      dispatch(fetchByCategory(category));
      // }
    }
  }, [state.search, path, searchParams, dispatch]);

  /**Select notice by id  */
  const getNoticeById = useMemo(() => {
    const notice = notices?.find(item => item._id === state.btnId);
    return notice;
  }, [notices, state.btnId]);

  /**Search info by search form */
  const handleSearch = q => {
    setState(prevState => ({
      ...prevState,
      search: q,
    }));
    setSearchParams({ q });
  };

  /**Get button-id and button-dataset*/
  const getBtnInfo = (btnId, btnType) => {
    //TODO прописати логіку в залежності від кнопки
    setState(prevState => ({
      ...prevState,
      btnType,
      btnId,
    }));

    if (
      !Boolean(token) &&
      (btnType?.favorite || btnType?.add || btnType?.delete)
    ) {
      navigate('/login');
    }

    if (btnType?.favorite) {
      dispatch(changeFavorite(btnId));
      return;
    }

    openModal();
  };

  return (
    <>
      {isOpen && (
        <Modal
          handleBackdropClick={handleBackdropClick}
          handleKeyDown={handleKeyDown}
        >
          {/* {state.btnType?.favorite && <p>Favorite</p>} */}
          {state.btnType?.modal && (
            <>
              <ModalNotice
                notices={getNoticeById}
                closeModal={closeModal}
                getBtnInfo={getBtnInfo}
              />
            </>
          )}
          {state.btnType?.delete && (
            <DelNoticeItem notices={notices} closeModal={closeModal} />
          )}
          {state.btnType?.add && <p>Add pet</p>}
        </Modal>
      )}

      <Container>
        <Title>Find your favorite pet</Title>
        <NoticesSearch handleSearch={handleSearch} />
        <NoticesCategoriesNav getBtnInfo={getBtnInfo} />
        {isLoading && <Loader />}
        {Boolean(notices?.length > 0) ? (
          <NoticesCategoriesList notices={notices} getBtnInfo={getBtnInfo} />
        ) : (
          <p>Not Found</p>
          // <NoticeNotFound />
        )}
        {/* <ModalNotice /> */}
      </Container>
    </>
  );
}

export default NoticesPage;
