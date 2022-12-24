import Container from 'components/Common/Container';
import AddNoticeButton from 'components/Notices/AddNoticeButton';
import NoticesCategoriesNav from 'components/Notices/NoticesCategoriesNav';
function NoticesPage() {
  return (
    <>
      <NoticesCategoriesNav />
      <Container>
        <AddNoticeButton />
        <p>User Page</p>
      </Container>
    </>
  );
}

export default NoticesPage;
