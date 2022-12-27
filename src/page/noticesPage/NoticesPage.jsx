import { useSelector } from 'react-redux';
import { selectNoticeState } from 'redux/notice/noticeSelectors';

import Container from 'components/Common/Container';
import AddNoticeButton from 'components/Notices/AddNoticeButton';
import NoticesSearch from 'components/Notices/NoticesSearch';
import NoticesCategoriesNav from 'components/Notices/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/Notices/NoticesCategoriesList';
import NoticeNotFound from 'components/Notices/noticeNotFound';
import { Title } from './NoticesPage.styled';
import Loader from 'components/Loader';

function NoticesPage() {
  const { notices, isLoading } = useSelector(selectNoticeState);
  return (
    <>
      <Container>
        <Title>Find your favorite pet</Title>
        <NoticesSearch />
        <NoticesCategoriesNav />
        {isLoading ? (
          <Loader />
        ) : Boolean(notices.length > 0) ? (
          <NoticesCategoriesList notices={notices} />
        ) : (
          <NoticeNotFound />
        )}
        <AddNoticeButton />
      </Container>
    </>
  );
}

export default NoticesPage;
