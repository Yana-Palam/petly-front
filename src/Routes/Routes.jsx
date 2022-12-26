import { Navigate, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import PublicRouter from 'Routes/PublicRouter';
// import PrivateRouter from 'Routes/PrivateRoute';
// import NotFound from 'page/notFoundPage/NotFound';
import Loader from 'components/Loader';

import Layout from '../components/Layout/Layout';
const RegisterPage = lazy(() =>
  import('../page/registrationPage/RegisterPage')
);
const LoginPage = lazy(() => import('../page/loginPage/LoginPage'));
const OurFriendsPage = lazy(() =>
  import('../page/ourFriendsPage/OurFriendsPage')
);
const NewsPage = lazy(() => import('../page/newsPage/NewsPage'));
const NoticesPage = lazy(() => import('../page/noticesPage/NoticesPage'));
const UserPage = lazy(() => import('../page/userPage/UserPage'));
const HomePage = lazy(() => import('../page/homePage/Hero'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRouter>
                <HomePage />
              </PublicRouter>
            }
          />
          <Route
            path="register"
            element={
              <PublicRouter>
                <RegisterPage />
              </PublicRouter>
            }
          />
          <Route
            path="login"
            element={
              <PublicRouter>
                <LoginPage />
              </PublicRouter>
            }
          />
          <Route
            path="friends"
            element={
              <PublicRouter>
                <OurFriendsPage />
              </PublicRouter>
            }
          />
          <Route
            path="news"
            element={
              <PublicRouter>
                <NewsPage />
              </PublicRouter>
            }
          />
          <Route
            path="notices/:category"
            element={
              <PublicRouter>
                <NoticesPage />
              </PublicRouter>
            }
          />
          <Route
            path="user"
            element={
              //Alena temporarily changed the PrivateRouter
              <PublicRouter>
                <UserPage />
              </PublicRouter>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
