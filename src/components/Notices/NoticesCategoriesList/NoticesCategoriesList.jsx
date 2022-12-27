import PropTypes from 'prop-types';
import NoticeCategoryItem from 'components/Notices/NoticeCategoryItem';
import { List, Item } from './NoticesCategoriesList.styled';

function NoticesCategoriesList({ notices }) {
  return (
    <List>
      {notices.map(
        ({ _id, category, photoURL, title, breed, location, birthday }) => (
          <Item key={_id}>
            <NoticeCategoryItem
              category={category}
              photoURL={photoURL}
              title={title}
              breed={breed}
              location={location}
              birthday={birthday}
            />
          </Item>
        )
      )}
    </List>
  );
}

NoticesCategoriesList.propTypes = {
  _id: PropTypes.string,
  category: PropTypes.string,
  photoURL: PropTypes.string,
  title: PropTypes.string,
  breed: PropTypes.string,
  location: PropTypes.string,
  // birthday: PropTypes.string,
  // birthday: PropTypes.number,
};

export default NoticesCategoriesList;

//TODO прописати пропси.
