import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAccessToken } from 'redux/auth/authSelectors';

import { categoryButtons, allowCategory } from './category';
import Box from 'components/Common/Box';
import AddNoticeButton from 'components/Notices/AddNoticeButton';
import ModalAddsPet from 'components/User/ModalAddsPet';
import ModalAddNotice from 'components/User/ModalAddsPet';

import {
  CategoryList,
  CategoryListItem,
  CategoryPage,
  CategoryPageBox,
} from './NoticesCategoriesNav.styled';
// import { selectAccessToken } from 'redux/auth/authSelectors';

function NoticesCategoriesNav({ getBtnInfo }) {
  const handleClick = e => {
    e.preventDefault();
    const btnId = e.currentTarget.id;
    const btnType = e.currentTarget.dataset;
    console.log(btnId);
    getNotice(btnId, btnType);
  };

  const getNotice = (btnId, btnType) => {
    getBtnInfo(btnId, btnType);
  };

  const { category } = useParams();
  const token = useSelector(selectAccessToken);

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
              <AddNoticeButton handleClick={handleClick} />
            </Box>
            {showModal && <ModalAddNotice setShowModal={setShowModal} />}
          </CategoryPageBox>
        </>
      )}
    </>
  );
}

export default NoticesCategoriesNav;
