import Container from 'components/Common/Container';
import AddNoticeButton from 'components/Notices/AddNoticeButton';
import NoticesSearch from 'components/Notices/NoticesSearch';
import NoticesCategoriesNav from 'components/Notices/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/Notices/NoticesCategoriesList';
import { Title } from './NoticesPage.styled';
function NoticesPage() {
  return (
    <>
      <Container>
        <Title>Find your favorite pet</Title>
        <NoticesSearch />
        <NoticesCategoriesNav />
        <NoticesCategoriesList />
        <AddNoticeButton />
      </Container>
    </>
  );
}

export default NoticesPage;
