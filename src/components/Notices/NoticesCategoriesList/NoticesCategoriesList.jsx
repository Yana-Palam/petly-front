import NoticeCategoryItem from 'components/Notices/NoticeCategoryItem';
import { List, Item } from './NoticesCategoriesList.styled';

function NoticesCategoriesList({ notices, getIdNotice }) {
  const getNotice = id => {
    getIdNotice(id);
  };

  return (
    <List>
      {notices.map(
        ({ _id, category, img, title, breed, location, birthday }) => (
          <Item key={_id}>
            <NoticeCategoryItem
              id={_id}
              category={category}
              img={img}
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
