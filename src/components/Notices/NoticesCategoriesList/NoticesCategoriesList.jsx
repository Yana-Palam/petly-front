import NoticeCategoryItem from 'components/Notices/NoticeCategoryItem';
import { List, Item } from './NoticesCategoriesList.styled';

function NoticesCategoriesList({ notices = [], getBtnInfo }) {
  const getNotice = (btnId, btnType) => {
    getBtnInfo(btnId, btnType);
  };
  return (
    <List>
      {notices.map(
        ({ _id, category, avatarURL, title, breed, location, birthday }) => (
          <Item key={_id}>
            <NoticeCategoryItem
              id={_id}
              category={category}
              avatarURL={avatarURL}
              title={title}
              breed={breed}
              location={location}
              birthday={birthday}
              getNotice={getNotice}
            />
          </Item>
        )
      )}
    </List>
  );
}

export default NoticesCategoriesList;

//TODO прописати пропси.
