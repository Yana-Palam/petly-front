import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import Box from 'components/Common/Box';
import Header from 'components/Header';

const Layout = () => {
  return (
    <>
      <Header /*closeModal={closeModal} isOpen={isOpen} */ />
      <Suspense fallback={<Loader />}>
        <Box as={'section'}>
          <Outlet />
        </Box>
      </Suspense>
    </>
  );
};

Layout.propTypes = {
  Outlet: PropTypes.node,
};

export default Layout;
