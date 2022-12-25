import Container from 'components/Common/Container';
import AddNoticeButton from 'components/Notices/AddNoticeButton';
import NoticesSearch from 'components/Notices/NoticesSearch';
import NoticesCategoriesNav from 'components/Notices/NoticesCategoriesNav';
function NoticesPage() {
  return (
    <>
      <NoticesSearch />
      <NoticesCategoriesNav />
      <Container>
        <AddNoticeButton />
        <p>User Page</p>
      </Container>
    </>
  );
}

export default NoticesPage;
