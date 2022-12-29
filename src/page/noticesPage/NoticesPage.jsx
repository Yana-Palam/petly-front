import { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';

import useToggleModal from 'hooks/toggleModal';

import { selectAccessToken } from 'redux/auth/authSelectors';
import { fetchByCategory } from 'redux/notice/noticeOperations';
import { selectNoticeState } from 'redux/notice/noticeSelectors';

// Components
import Container from 'components/Common/Container';
import Modal from 'components/Common/Modal/Modal';
import NoticesSearch from 'components/Notices/NoticesSearch';
import NoticesCategoriesNav from 'components/Notices/NoticesCategoriesNav';
import AddNoticeButton from 'components/Notices/AddNoticeButton';
import NoticesCategoriesList from 'components/Notices/NoticesCategoriesList';
import NoticeNotFound from 'components/Notices/noticeNotFound';
import Loader from 'components/Loader';
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
    if (token) {
      navigate('/login');
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
          {state.btnType?.favorite && <p>Favorite</p>}
          {state.btnType?.modal && (
            <>
              <div>Modal Windows for {getNoticeById._id}</div>
              <h2>{getNoticeById.title}</h2>
              <img src={getNoticeById.avatarURL} alt={getNoticeById?.title} />
              <button onClick={closeModal}>close</button>
            </>
          )}
          {state.btnType?.delete && <p>Delete</p>}
          {state.btnType?.add && <p>Add pet</p>}
        </Modal>
      )}

      <Container>
        <Title>Find your favorite pet</Title>
        <NoticesSearch handleSearch={handleSearch} />
        <NoticesCategoriesNav />
        {isLoading ? (
          <Loader />
        ) : Boolean(notices?.length > 0) ? (
          <NoticesCategoriesList notices={notices} getBtnInfo={getBtnInfo} />
        ) : (
          <NoticeNotFound />
        )}

        <AddNoticeButton getBtnInfo={getBtnInfo} />
      </Container>
    </>
  );
}

export default NoticesPage;
