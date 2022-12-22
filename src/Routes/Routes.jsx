import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
// import PublicRouter from 'Routes/PublicRouter';
// import PrivateRouter from 'Routes/PrivateRoute';
import Header from 'components/Header';
import NotFound from 'page/notFoundPage/NotFound';
import Loader from 'components/Loader';

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
