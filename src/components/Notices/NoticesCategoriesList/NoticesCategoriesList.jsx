import NoticeCategoryItem from 'components/Notices/NoticeCategoryItem';
import { List, Item } from './NoticesCategoriesList.styled';

function NoticesCategoriesList({ notices = [], getIdNotice }) {
  const getNotice = (btnId, btnType) => {
    getIdNotice(btnId, btnType);
  };
  console.log(111, notices);
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
