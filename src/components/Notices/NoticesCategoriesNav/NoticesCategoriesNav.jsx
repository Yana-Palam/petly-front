import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAccessToken } from 'redux/auth/authSelectors';

import { categoryButtons, allowCategory } from './category';
import Box from 'components/Common/Box';
import AddNoticeButton from 'components/Notices/AddNoticeButton';

import {
  CategoryList,
  CategoryListItem,
  CategoryPage,
  CategoryPageBox,
} from './NoticesCategoriesNav.styled';
// import { selectAccessToken } from 'redux/auth/authSelectors';

function NoticesCategoriesNav({ getBtnInfo }) {
  const { category } = useParams();
  const token = useSelector(selectAccessToken);
  const getNotice = (btnId, btnType) => {
    getBtnInfo(btnId, btnType);
  };

  return (
    <>
      {!Boolean(allowCategory.find(item => item === category)) ? (
        <Navigate to={'/'} />
      ) : (
        <>
          <CategoryPageBox>
            {' '}
            <Box>
              <CategoryList>
                {categoryButtons.publicRoute.map(({ pageTitle, link }) => (
                  <CategoryListItem key={pageTitle}>
                    <CategoryPage to={`/notices/${link}`}>
                      {pageTitle}
                    </CategoryPage>
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
            </Box>
            <Box>
              <AddNoticeButton getBtnInfo={getNotice} />
            </Box>
          </CategoryPageBox>
        </>
      )}
    </>
  );
}

export default NoticesCategoriesNav;
