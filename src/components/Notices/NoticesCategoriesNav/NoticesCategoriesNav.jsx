import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { noticeGetByCategory } from 'redux/notice/noticeOperations';
import { selectNotices } from 'redux/notice/noticeSelectors';
import { selectAccessToken } from 'redux/auth/authSelectors';

import { categoryButtons, allowCategory } from './category';

import {
  CategoryList,
  CategoryListItem,
  CategoryPage,
} from './NoticesCategoriesNav.styled';
// import { selectAccessToken } from 'redux/auth/authSelectors';

function NoticesCategoriesNav() {
  const dispatch = useDispatch();
  const { category } = useParams();
  const token = useSelector(selectAccessToken);

  const notice = useSelector(selectNotices);

  useEffect(() => {
    if (category) {
      dispatch(noticeGetByCategory(category));
    }
  }, [category, dispatch]);

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

          <CategoryList>
            {notice.map(item => (
              <li key={item._id}>
                <img src={item.photoURL} alt={item.photoURL} />
                {item.name}
              </li>
            ))}
          </CategoryList>
        </>
      )}
    </>
  );
}

export default NoticesCategoriesNav;
