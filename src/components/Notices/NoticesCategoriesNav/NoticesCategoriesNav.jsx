import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAccessToken } from 'redux/auth/authSelectors';

import { categoryButtons, allowCategory } from './category';

import {
  CategoryList,
  CategoryListItem,
  CategoryPage,
} from './NoticesCategoriesNav.styled';
// import { selectAccessToken } from 'redux/auth/authSelectors';

function NoticesCategoriesNav() {
  const { category } = useParams();
  const token = useSelector(selectAccessToken);

  return (
    <>
      {!Boolean(allowCategory.find(item => item === category)) ? (
        <Navigate to={'/'} />
      ) : (
        <>
          <CategoryList>
            {categoryButtons.publicRoute.map(({ pageTitle, link }) => (
              <CategoryListItem key={pageTitle}>
                <CategoryPage to={`/notices/${link}`}>{pageTitle}</CategoryPage>
              </CategoryListItem>
            ))}

            {Boolean(token) &&
              categoryButtons.privateRoute.map(({ pageTitle, link }) => (
                <CategoryListItem key={pageTitle}>
                  <CategoryPage to={`/notices/${link}`}>
                    {pageTitle}
                  </CategoryPage>
                </CategoryListItem>
              ))}
          </CategoryList>
        </>
      )}
    </>
  );
}

export default NoticesCategoriesNav;
