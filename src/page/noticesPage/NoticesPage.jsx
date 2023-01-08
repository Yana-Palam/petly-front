import { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';

import useToggleModal from 'hooks/toggleModal';

import { selectAccessToken } from 'redux/auth/authSelectors';
import { fetchByCategory } from 'redux/notice/noticeOperations';
import { selectNoticeState } from 'redux/notice/noticeSelectors';
import {
  addFavoriteNotice,
  deleteFavoriteNotice,
} from 'redux/auth/authOperations';
import { deleteNoticeFavorite } from 'redux/notice/noticeSlice';
// Components
import Container from 'components/Common/Container';
import Modal from 'components/Common/Modal/Modal';
import ModalNotice from 'components/Notices/ModalLearnMoreNotice/ModalNotice';
import NoticesSearch from 'components/Notices/NoticesSearch';
import NoticesCategoriesNav from 'components/Notices/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/Notices/NoticesCategoriesList';
import NoticeNotFound from 'components/Notices/noticeNotFound/NoticeNotFound';
import Loader from 'components/Loader';
import DelNoticeItem from 'components/Notices/DelNoticeItem';
import Pagination from 'components/Common/Pagination';

// import ModalNotice from '../../components/Notices/ModalNotice/ModalNotice';
import { Title } from './NoticesPage.styled';
import ModalAddNotice from 'components/Notices/ModalAddNotice';
import { toast } from 'react-toastify';
import Section from 'components/Common/Section';

const initialState = {
  search: '',
  btnType: '',
  btnId: '',
  favorite: '',
};
let limit = 8;
function NoticesPage() {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const token = useSelector(selectAccessToken);
  const { resultNotice, isLoading, page, totalPage } =
    useSelector(selectNoticeState);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(page);

  const { isOpen, openModal, closeModal, handleBackdropClick, handleKeyDown } =
    useToggleModal();

  const category = useLocation().pathname.split('/')[2];

  useEffect(() => {
    setCurrentPage(1);
  }, [category, searchParams]);

  useEffect(() => {
    const q = searchParams.get('q');
    if (Boolean(q)) {
      dispatch(fetchByCategory({ category, page: currentPage, limit, q }));
    } else {
      dispatch(fetchByCategory({ category, page: currentPage, limit }));
    }
  }, [state.search, category, searchParams, dispatch, currentPage]);

  /**Select notice by id  */
  const getNoticeById = useMemo(() => {
    const notice = resultNotice?.find(item => item._id === state.btnId);
    return notice;
  }, [resultNotice, state.btnId]);

  /**Search info by search form */
  const handleSearch = q => {
    // setState(prevState => ({
    //   ...prevState,
    //   search: q,
    // }));
    setSearchParams({ q });
  };

  /**Get button-id and button-dataset*/
  const getBtnInfo = async (btnId, btnType, favorite) => {
    //TODO прописати логіку в залежності від кнопки
    setState(prevState => ({
      ...prevState,
      btnType,
      btnId,
      favorite,
    }));

    if (
      !Boolean(token) &&
      (btnType?.favorite || btnType?.add || btnType?.delete)
    ) {
      toast.warn('You are not a registered user!');
      return;
    }

    if (btnType?.modal || btnType?.add || btnType?.delete) {
      openModal();
      return;
    }

    if (btnType?.favorite) {
      if (!favorite) {
        dispatch(addFavoriteNotice(btnId));
      } else {
        const { payload } = await dispatch(deleteFavoriteNotice(btnId));
        if (payload === btnId && category === 'favorite') {
          dispatch(deleteNoticeFavorite(btnId));
        }
      }
    }
    return;
  };

  return (
    <>
      <Section>
        {isOpen && (
          <Modal
            handleBackdropClick={handleBackdropClick}
            handleKeyDown={handleKeyDown}
          >
            {state.btnType?.modal && (
              <>
                <ModalNotice
                  notice={getNoticeById}
                  token={token}
                  closeModal={closeModal}
                  path={category}
                />
              </>
            )}
            {state.btnType?.delete && (
              <DelNoticeItem id={state.btnId} closeModal={closeModal} />
            )}
            {state.btnType?.add && (
              <>
                <ModalAddNotice closeModal={closeModal} />
              </>
            )}
          </Modal>
        )}
        <Container>
          <Title>Find your favorite pet</Title>
          <NoticesSearch handleSearch={handleSearch} />
          <NoticesCategoriesNav getBtnInfo={getBtnInfo} />
          {isLoading && <Loader />}
          {Boolean(resultNotice?.length > 0) ? (
            <NoticesCategoriesList
              notices={resultNotice}
              getBtnInfo={getBtnInfo}
            />
          ) : (
            <NoticeNotFound />
          )}
          <Pagination
            currentPage={currentPage}
            totalCount={totalPage}
            pageSize={totalPage}
            onPageChange={page => setCurrentPage(page)}
          />
        </Container>
      </Section>
    </>
  );
}

export default NoticesPage;
