import { Outlet } from 'react-router-dom';
import { CategoryPage } from './NoticesCategoriesNav.styled';

const categoryButtons = [
  {
    pageTitle: 'sell',
    link: 'sell',
  },
  {
    pageTitle: 'lost/found',
    link: 'lost-found',
  },
  {
    pageTitle: 'in good hands',
    link: 'in-good-hands',
  },
  {
    pageTitle: 'favorite ads',
    link: 'favorite-ads',
    authUser: true,
  },
  {
    pageTitle: 'my ads',
    link: 'my-ads',
    authUser: true,
  },
];

function NoticesCategoriesNav() {
  return (
    <>
      <ul>
        <li>
          <CategoryPage to="sell">sell</CategoryPage>
        </li>
        <li>
          <CategoryPage to="lost-found"></CategoryPage>
        </li>
        <li>
          <CategoryPage to="for-free"></CategoryPage>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default NoticesCategoriesNav;
