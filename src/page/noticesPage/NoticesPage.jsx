import { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectNoticeState } from 'redux/notice/noticeSelectors';
import { useLocation, useSearchParams } from 'react-router-dom';
import useToggleModal from 'hooks/toggleModal';

import Container from 'components/Common/Container';
import Modal from 'components/Common/Modal/Modal';
import AddNoticeButton from 'components/Notices/AddNoticeButton';
import NoticesSearch from 'components/Notices/NoticesSearch';
import NoticesCategoriesNav from 'components/Notices/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/Notices/NoticesCategoriesList';
import NoticeNotFound from 'components/Notices/noticeNotFound';
import { Title } from './NoticesPage.styled';
import Loader from 'components/Loader';

function NoticesPage() {
  const { notices, isLoading } = useSelector(selectNoticeState);
  const [searchParams, setSearchParams] = useSearchParams();
  const { isOpen, openModal, closeModal,handleBackdropClick, handleKeyDown } =
    useToggleModal();

  const [search, setSearch] = useState(
    '' // searchParams.get('q') === null ? '' : searchParams.get('q')
  );

  const [idNotice, SetIdNotice] = useState();

  const category = useLocation().pathname;

  useEffect(() => {
    const q = searchParams.get('q');
    if (Boolean(q)) {
      console.log(111111, { category, q: search });
      //TOTO dispatch /api/notices/:category?q=search
      // dispatch({ category, q: search });
      setSearch('');
    } else {
      console.log(222222, { category, q: search });
      //TOTO dispatch /api/notices/:category
      // dispatch({ category });
    }
  }, [search, category, searchParams]);

  const getNoticeById = useMemo(() => {
    const notice = notices.find(item => item._id === idNotice);
    return notice;
  }, [notices, idNotice]);

  const handleSearch = q => {
    setSearch(q);
    setSearchParams({ q });
  };

  const getIdNotice = id => {
    SetIdNotice(id);
    openModal();
  };

  return (
    <>
      {isOpen && (
        <Modal
          handleBackdropClick={handleBackdropClick}
          handleKeyDown={handleKeyDown}
        >
          <div>Modal Windows for {getNoticeById._id}</div>
          <h2>{getNoticeById.title}</h2>
          <img src={getNoticeById.img[0].photoURL} alt={getNoticeById.title} />
          <button onClick={closeModal}>close</button>
        </Modal>
      )}

      <Container>
        <Title>Find your favorite pet</Title>
        <NoticesSearch handleSearch={handleSearch} />
        <NoticesCategoriesNav />
        {isLoading ? (
          <Loader />
        ) : Boolean(notices.length > 0) ? (
          <NoticesCategoriesList notices={notices} getIdNotice={getIdNotice} />
        ) : (
          <NoticeNotFound />
        )}
        <AddNoticeButton />
      </Container>
    </>
  );
}

export default NoticesPage;
