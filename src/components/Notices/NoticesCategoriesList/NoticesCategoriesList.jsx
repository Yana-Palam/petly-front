import NoticeCategoryItem from 'components/Notices/NoticeCategoryItem';
import { ListNotices } from './NoticesCategoriesList.styled';

function NoticesCategoriesList({ notices = [], getBtnInfo }) {
  const getNotice = (btnId, btnType) => {
    getBtnInfo(btnId, btnType);
  };
  return (
    <ListNotices>
      {notices.map(({ ...item }) => (
        <NoticeCategoryItem key={item._id} {...item} getNotice={getNotice} />
      ))}
    </ListNotices>
  );
}

export default NoticesCategoriesList;

//TODO прописати пропси.
